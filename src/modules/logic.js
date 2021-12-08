import { projectFactory } from "./project";
import { createProjectTab } from "./workspace";

const initializeWorkspace = () => {
    const defaultProject = projectFactory("default");
    createProjectTab(defaultProject);
}

const promptToAddProject = () => {
    const projectName = prompt("Name of new project?");
    const project = projectFactory(projectName);
    createProjectTab(project);
}

const addProjectButton = document.querySelector("#add");
addProjectButton.addEventListener("click", promptToAddProject);

export default initializeWorkspace;