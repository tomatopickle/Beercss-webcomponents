const theme = (config) => {
    let emptyTheme = {
      light: "",
      dark: "",
      selected: "light"
    }

    if (!window.materialDynamicColors) return emptyTheme;

    if (!config) {
      document.body.removeAttribute("style");
      return emptyTheme;
    };

    if (config.from && config.mode && config.from[config.mode]) {
      let newTheme = {
        light: config.from.light,
        dark: config.from.dark,
        selected: config.mode
      };
      
      document.body.setAttribute("style", newTheme[config.mode]);
      return newTheme;
    }

    return window.materialDynamicColors(config.from).then((theme) => {
      const toCss = (data) => {
        let style = "";
        for (var i in data) {
          let kebabCase = i.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
          style += "--"+kebabCase+": "+data[i]+";";
        }
        return style;
      };

      let newTheme = {
        light: toCss(theme.light) + "--active: rgba(0,0,0,.1);--mode: light;",
        dark: toCss(theme.dark) + "--active: rgba(255,255,255,.2);--mode: dark;",
        selected: config.mode
      };

      document.body.setAttribute("style", newTheme[config.mode]);
      return newTheme;
    });
};
export default theme