export const onFocusInput = (e) => {
  updateInput(e.currentTarget);
};

export const onBlurInput = (e) => {
  updateInput(e.currentTarget);
};
export const updateInput = (target) => {
  let parentTarget = parent(target);
  let label = query("label", parentTarget);
  let isBorder = hasClass(parentTarget, "border") && !hasClass(parentTarget, "fill");
  let toActive = document.activeElement.tagName == "B-INPUT" || document.activeElement == target || target.value || /date|time/.test(target.type);
  if (toActive) {
    if (isBorder && label) {
      let width = hasClass(label, "active") ? label.offsetWidth : Math.round(label.offsetWidth / 1.33);
      let start = hasClass(parentTarget, "round") ? 20 : 12;
      let end = width + start + 8;
      target.style.clipPath = `polygon(0% 0%, ${start}rem 0%, ${start}rem 8rem, ${end}rem 8rem, ${end}rem 0%, 100% 0%, 100% 100%, 0% 100%)`;
    } else
      target.style.clipPath = "";
    addClass(label, "active");
  } else {
    removeClass(label, "active");
    target.style.clipPath = "";
  }

  if (target.getAttribute("data-ui"))
    open(target);
}
export const onClickLabel = (e) => {
  e.focus();
};