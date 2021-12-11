import { requestAddTodo, requestAddProject, editTodoSubmit } from './logic';
import { getProjects } from './project';

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

const initializeSidebar = () => {
    const newTodo = document.querySelector("#newTodo");
    const newProject = document.querySelector("#newProject");

    newTodo.addEventListener("click", addNewTodo);
    newProject.addEventListener("click", addNewProject);
}

const addNewTodo = () => {
    const askTodo = modalAskTodo();
    const closeButton = createCloseButton();
    modalContent.innerHTML = "";

    modalContent.appendChild(closeButton);
    modalContent.appendChild(askTodo);
    
    modal.classList.add("modal-show");
}

const addNewProject = () => {
    const projectName = prompt("New project name?");
    requestAddProject(projectName);
}

const closeModal = () => {
    modal.classList.remove("modal-show");
    modalContent.removeChild(modalContent.lastChild);
}

const modalAskTodo = () => {
    const askTodo = document.createElement("div");
    askTodo.classList.add("askTodo");

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleLabel.setAttribute("for", "titleInput");
    titleLabel.classList.add("firstLabel");

    const titleInput = document.createElement("input");
    titleInput.classList.add("firstInput");
    
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    descriptionLabel.setAttribute("for", "descriptionInput");
    descriptionLabel.classList.add("secondLabel");

    const descriptionInput = document.createElement("textarea");
    descriptionInput.classList.add("secondInput");
    
    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date";
    dueDateLabel.classList.add("firstLabel");

    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.classList.add("firstInput");
    
    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority";
    priorityLabel.classList.add("firstLabel");

    const priorityInput = priorityChoice();
    priorityInput.classList.add("firstInput");
    
    const notesLabel = document.createElement("label");
    notesLabel.textContent = "Notes";
    notesLabel.setAttribute("for", "notesInput");
    notesLabel.classList.add("secondLabel");

    const notesInput = document.createElement("textarea");
    notesInput.classList.add("secondInput");

    const projectLabel = document.createElement("label");
    projectLabel.textContent = "Project";
    projectLabel.classList.add("secondLabel");

    const projectInput = selectProject();
    projectInput.classList.add("projectInput");

    const addButton = document.createElement("button");
    addButton.textContent = "Add new to-do";
    addButton.addEventListener("click", () => {
        let title = titleInput.value;
        let description = descriptionInput.value;
        let dueDate = dueDateInput.value;
        let priority = priorityInput.value;
        let notes = notesInput.value;
        let projectName = projectInput.value;

        requestAddTodo(title, description, dueDate, priority, notes, projectName);
    });
    
    askTodo.appendChild(titleLabel);
    askTodo.appendChild(titleInput);
    askTodo.appendChild(descriptionLabel);
    askTodo.appendChild(descriptionInput);
    askTodo.appendChild(dueDateLabel);
    askTodo.appendChild(dueDateInput);
    askTodo.appendChild(priorityLabel);
    askTodo.appendChild(priorityInput);
    askTodo.appendChild(notesLabel);
    askTodo.appendChild(notesInput);
    askTodo.appendChild(projectLabel);
    askTodo.appendChild(projectInput);
    askTodo.appendChild(addButton);

    return askTodo;
}

const priorityChoice = () => {
    const priorityInput = document.createElement("select");

    const low = document.createElement("option");
    low.setAttribute("value", 0);
    low.textContent = "Low";

    const med = document.createElement("option");
    med.setAttribute("value", 1);
    med.textContent = "Medium";

    const high = document.createElement("option");
    high.setAttribute("value", 2);
    high.textContent = "High";

    priorityInput.appendChild(low);
    priorityInput.appendChild(med);
    priorityInput.appendChild(high);

    return priorityInput;
}

const selectProject = () => {
    const projectInput = document.createElement("select");
    const projectsArray = getProjects();
    projectsArray.forEach(project => {
        const projectOption = document.createElement("option");
        projectOption.setAttribute("value", project.name);
        projectOption.textContent = project.name;
        projectInput.appendChild(projectOption);
    });
    return projectInput;
}

const createCloseButton = () => {
    const closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.textContent = "\u00D7";
    closeButton.addEventListener("click", closeModal);
    return closeButton;
}

const todoEditor = (todo) => {
    const editTodo = document.createElement("div");
    editTodo.classList.add("askTodo");

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleLabel.setAttribute("for", "titleInput");
    titleLabel.classList.add("firstLabel");

    const titleInput = document.createElement("input");
    titleInput.classList.add("firstInput");
    titleInput.value = todo.title;
    
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    descriptionLabel.setAttribute("for", "descriptionInput");
    descriptionLabel.classList.add("secondLabel");

    const descriptionInput = document.createElement("textarea");
    descriptionInput.classList.add("secondInput");
    descriptionInput.value = todo.description;
    
    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date";
    dueDateLabel.classList.add("firstLabel");

    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.classList.add("firstInput");
    dueDateInput.value = todo.dueDate;
    
    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority";
    priorityLabel.classList.add("firstLabel");

    const priorityInput = priorityChoice();
    priorityInput.classList.add("firstInput");
    priorityInput.value = todo.priority;
    
    const notesLabel = document.createElement("label");
    notesLabel.textContent = "Notes";
    notesLabel.setAttribute("for", "notesInput");
    notesLabel.classList.add("secondLabel");

    const notesInput = document.createElement("textarea");
    notesInput.classList.add("secondInput");
    notesInput.value = todo.notes;

    const addButton = document.createElement("button");
    addButton.textContent = "Submit edit";
    addButton.addEventListener("click", () => {
        editTodoSubmit(todo, titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, notesInput.value);
        closeModal();
    });
    
    editTodo.appendChild(titleLabel);
    editTodo.appendChild(titleInput);
    editTodo.appendChild(descriptionLabel);
    editTodo.appendChild(descriptionInput);
    editTodo.appendChild(dueDateLabel);
    editTodo.appendChild(dueDateInput);
    editTodo.appendChild(priorityLabel);
    editTodo.appendChild(priorityInput);
    editTodo.appendChild(notesLabel);
    editTodo.appendChild(notesInput);
    editTodo.appendChild(addButton);

    return editTodo;
}


export { initializeSidebar, todoEditor, createCloseButton };