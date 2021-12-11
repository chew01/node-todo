import { addTodoToProject, addToProjects, findProject, removeTodoFromProject } from "./project";
import todoFactory from "./todo";
import { projectFactory } from "./project";
import { initializeHeader, viewBranch } from "./workspace";
import { createCloseButton, todoEditor } from "./sidebar";

const requestAddTodo = (title, description, dueDate, priority, notes, projectName) => {
    const project = findProject(projectName);
    const newTodo = todoFactory(title, description, dueDate, priority, notes, false, project);
    addTodoToProject(newTodo, project);
    viewBranch();
}

const requestAddProject = (name) => {
    const newProject = projectFactory(name);
    addToProjects(newProject);
    initializeHeader();
}

const requestRemoveTodo = (todo) => {
    removeTodoFromProject(todo, todo.project);
    viewBranch();
}

const requestEditTodo = (todo) => {
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");
    const editor = todoEditor(todo);
    const closeButton = createCloseButton();

    modalContent.innerHTML = "";
    modalContent.appendChild(closeButton);
    modalContent.appendChild(editor);
    
    modal.classList.add("modal-show");
}

const editTodoSubmit = (todo, newTitle, newDescription, newDate, newPriority, newNotes) => {
    todo.title = newTitle;
    todo.description = newDescription;
    todo.dueDate = newDate;
    todo.priority = newPriority;
    todo.notes = newNotes;
    viewBranch();
}

export { requestAddTodo, requestAddProject, requestRemoveTodo, requestEditTodo, editTodoSubmit };