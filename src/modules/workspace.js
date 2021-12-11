import { requestRemoveTodo, requestEditTodo } from "./logic";
import { findProject, getProjects } from "./project";

const todos = document.querySelector("#todo");
const select = document.querySelector(".custom-select select");

const initializeHeader = () => {
    select.innerHTML = "";

    const viewAll = document.createElement("option");
    viewAll.setAttribute("value", 0);
    viewAll.textContent = "View All To-dos";
    select.appendChild(viewAll);

    const projects = getProjects();
    projects.forEach(project => {
        const newOption = document.createElement("option");
        newOption.setAttribute("value", project.name);
        newOption.textContent = project.name;

        select.appendChild(newOption);
    })
}

const viewBranch = () => {
    todos.innerHTML = "";
    if (select.value === "0") {
        const projects = getProjects();
        projects.forEach(project => {
            project.todoList.forEach(todo => {
                displayTodo(todo);
            })
        })
    } else {
        const selectedProject = findProject(select.value);
        selectedProject.todoList.forEach(todo => {
            displayTodo(todo);
        })
    }
}

const displayTodo = (todo) => {
    const display = document.createElement("div");
    display.classList.add("display");
    
    const displaySimp = document.createElement("div");
    displaySimp.classList.add("simp");
    setColorByPriority(displaySimp, todo.priority);

    const title = document.createElement("span");
    title.textContent = todo.title;
    const dueDate = document.createElement("span");
    dueDate.textContent = todo.dueDate;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("checkbox");
    const arrow = document.createElement("span");
    arrow.textContent = "\u25BC";
    arrow.id = "arrow";

    displaySimp.appendChild(title);
    displaySimp.appendChild(dueDate);
    displaySimp.appendChild(checkbox);
    displaySimp.appendChild(arrow);

    const displayDet = document.createElement("div");
    displayDet.classList.add("det");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    const description = document.createElement("p");
    description.textContent = todo.description;

    const notesLabel = document.createElement("label");
    notesLabel.textContent = "Notes";
    const notes = document.createElement("p");
    notes.textContent = todo.notes;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    displayDet.appendChild(descriptionLabel);
    displayDet.appendChild(notesLabel);
    displayDet.appendChild(editButton);
    displayDet.appendChild(description);
    displayDet.appendChild(notes);
    displayDet.appendChild(deleteButton);

    display.appendChild(displaySimp);
    display.appendChild(displayDet);

    todos.appendChild(display);

    arrow.addEventListener("click", () => {displayDet.classList.toggle("det-show")});

    editButton.addEventListener("click", () => {requestEditTodo(todo)});
    deleteButton.addEventListener("click", () => {requestRemoveTodo(todo)});
}

const setColorByPriority = (node, priority) => {
    let color;
    switch (priority) {
        case "0":
        color = "lightgreen";
        break;
        case "1":
        color = "beige";
        break;
        case "2":
        color = "lightpink";
        break;
    }
    node.setAttribute("style", `background-color: ${color}`);
}

select.addEventListener("change", viewBranch);

export { initializeHeader, viewBranch };