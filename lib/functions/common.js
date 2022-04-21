window.guid = () => {
    return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        let r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

window.query = (selector, element) => {
    try {
        return selector instanceof HTMLElement
            ? selector
            : (element || document).querySelector(selector);
    } catch { }
};

window.queryAll = (selector, element) => {
    try {
        return Array.isArray(selector)
            ? selector
            : (element || document).querySelectorAll(selector);
    } catch { }
};

window.hasClass = (element, name) => {
    if (!element) return false;
    return element.classList.contains(name);
};

window.addClass = (element, name) => {
    if (!element) return;
    element.classList.add(name);
};

window.removeClass = (element, name) => {
    if (!element) return;
    element.classList.remove(name);
};

window.on = (element, name, callback) => {
    element.addEventListener(name, callback, true);
};

window.off = (element, name, callback) => {
    element.removeEventListener(name, callback, true);
};

window.insertBefore = (newElement, element) => {
    if (!element) return;
    return element.parentNode.insertBefore(newElement, element);
};

window.prev = (element) => {
    if (!element) return;
    return element.previousElementSibling;
};

window.parent = (element) => {
    if (!element) return;
    return element.parentNode;
};

window.create = (json) => {
    let element = document.createElement("div");

    for (let i in json)
        element[i] = json[i];

    return element;
};