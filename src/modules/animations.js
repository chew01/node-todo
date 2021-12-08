const colorChangeOnTabHover = (tab) => {
    tab.setAttribute("style", "background-color: white");
}

const colorChangeAfterTabHover = (tab) => {
    tab.setAttribute("style", "background-color: none");
}

const colorChangeOnXHover = (cross) => {
    cross.setAttribute("style", "background-color: lightgrey");
}

const colorChangeAfterXHover = (cross) => {
    cross.setAttribute("style", "background-color: none");
}

export {colorChangeAfterTabHover, colorChangeOnTabHover, colorChangeAfterXHover, colorChangeOnXHover};