import { colorChangeOnTabHover, colorChangeAfterTabHover, colorChangeOnXHover, colorChangeAfterXHover } from "./animations";
import { projectFactory } from "./project";

const tabList = document.querySelector("#header ul");

const createProjectTab = (project) => {
    const tab = document.createElement("li");
    tab.textContent = project.name;
    tabList.appendChild(tab);

    const deleteButton = createDeleteButton(tab);
    tab.appendChild(deleteButton);

    tab.addEventListener("mouseover", () => {colorChangeOnTabHover(tab)});
    tab.addEventListener("mouseout", () => {colorChangeAfterTabHover(tab)});

    tabList.appendChild(tab);
}

const createDeleteButton = (tab) => {
    const deleteButton = document.createElement("a");
    deleteButton.textContent = "x";
    deleteButton.setAttribute("href", "#");
    deleteButton.addEventListener("click", () => {deleteProjectFromWorkspace(tab)});
    deleteButton.addEventListener("mouseover", () => {colorChangeOnXHover(deleteButton)});
    deleteButton.addEventListener("mouseout", () => {colorChangeAfterXHover(deleteButton)});
    return deleteButton;
}

const deleteProjectFromWorkspace = (tab) => {
    tabList.removeChild(tab);
}

const createAddProjectButton = () => {
    const addProjectButton = document.createElement("a");
    addProjectButton.textContent = "+";
    addProjectButton.setAttribute("href", "#");
    addProjectButton.id = "add";
    return addProjectButton;
}

const initializeWorkspace = () => {
    const defaultProject = projectFactory("default");
    createProjectTab(defaultProject);

    const projectButton = createAddProjectButton();
    projectButton.addEventListener("click", addProjectToWorkspace);
    projectButton.addEventListener("mouseover", () => {colorChangeOnXHover(projectButton)});
    projectButton.addEventListener("mouseout", () => {colorChangeAfterXHover(projectButton)});
    tabList.appendChild(projectButton);
}

const addProjectToWorkspace = () => {
    const projectName = prompt("Name of new project?");
    const project = projectFactory(projectName);
    createProjectTab(project);
}

export {createProjectTab, initializeWorkspace}