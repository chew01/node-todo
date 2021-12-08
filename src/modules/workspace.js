import { colorChangeOnTabHover, colorChangeAfterTabHover, colorChangeOnXHover, colorChangeAfterXHover } from "./animations";

const tabList = document.querySelector("#header ul");
const addProjectButton = document.querySelector("#add");
addProjectButton.addEventListener("mouseover", () => {colorChangeOnXHover(addProjectButton)});
addProjectButton.addEventListener("mouseout", () => {colorChangeAfterXHover(addProjectButton)});

const createProjectTab = (project) => {
    const tab = document.createElement("li");
    tab.textContent = project.name;
    tabList.insertBefore(tab, addProjectButton);

    const deleteButton = createDeleteButton(tab);
    tab.appendChild(deleteButton);

    tab.addEventListener("mouseover", () => {colorChangeOnTabHover(tab)});
    tab.addEventListener("mouseout", () => {colorChangeAfterTabHover(tab)});

    tabList.insertBefore(tab, addProjectButton);
}

const deleteProjectTab = (tab) => {
    tabList.removeChild(tab);
}

const createDeleteButton = (tab) => {
    const deleteButton = document.createElement("a");
    deleteButton.textContent = "x";
    deleteButton.setAttribute("href", "#");
    deleteButton.addEventListener("click", () => {deleteProjectTab(tab)});
    deleteButton.addEventListener("mouseover", () => {colorChangeOnXHover(deleteButton)});
    deleteButton.addEventListener("mouseout", () => {colorChangeAfterXHover(deleteButton)});
    return deleteButton;
}


const createTodoRow = (todo) => {
    const container = document.querySelector("#container");
    
    const todoRow = document.createElement("div");
    todoRow.classList.add("todo");

    const todoMini = createTodoMini(todo);
    todoMini.classList.add("todo-mini")
    const todoDetailed = document.createElement("div");
    todoDetailed.classList.add("todo-detailed")

    const todoDetailedContent = document.createElement("div");
    todoDetailedContent.textContent = `${todo.description}, ${todo.notes}`;
    todoDetailed.appendChild(todoDetailedContent);

    todoRow.appendChild(todoMini);
    todoRow.appendChild(todoDetailed);
    container.appendChild(todoRow);
}

const createTodoMini = (todo) => {
    const title = document.createElement("span");
    title.classList.add("title");
    title.textContent = todo.title;

    const dueDate = document.createElement("span");
    dueDate.classList.add("dueDate");
    dueDate.textContent = todo.dueDate;

    const priority = document.createElement("span");
    priority.classList.add("priority");
    priority.textContent = todo.priority;

    const check = document.createElement("span");
    check.classList.add("check");
    check.textContent = todo.check;

    const todoMini = document.createElement("div");
    todoMini.appendChild(title);
    todoMini.appendChild(dueDate);
    todoMini.appendChild(priority);
    todoMini.appendChild(check);

    return todoMini;
}

export { createProjectTab, createTodoRow };