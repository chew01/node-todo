import {parse, stringify, toJSON, fromJSON} from 'flatted';

const projectsArrayInitial = [];

if (!localStorage.getItem("projectsArray")) {
    localStorage.projectsArray = stringify(projectsArrayInitial);
}

const projectsArray = parse(localStorage.projectsArray);

const addToProjects = (project) => {
    projectsArray.push(project);
    updateStorage();
}

const getProjects = () => {
    return projectsArray;
}

const findProject = (name) => {
    let target;
    projectsArray.forEach(project => {
        if (project.name === name) {
            target = project;
        }
    })
    return target;
}

const projectFactory = (name) => {
    
    const todoList = [];
    return {name, todoList};
}

const addTodoToProject = (todo, project) => {
    project.todoList.push(todo);
    updateStorage();
}

const removeTodoFromProject = (todo, project) => {
    const indexOfTodo = findIndexOfTodoInProject(todo, project);
    project.todoList.splice(indexOfTodo, 1);
    updateStorage();
}

const findIndexOfTodoInProject = (todo, project) => {
    return project.todoList.indexOf(todo);
}

const updateStorage = () => {
    localStorage.projectsArray = stringify(projectsArray);
}


export {addToProjects, getProjects, findProject, projectFactory, addTodoToProject, removeTodoFromProject};