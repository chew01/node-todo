const projectFactory = (name) => {
    
    const todoList = [];
    return {name, todoList};
}

const addTodoToProject = (todo, project) => {
    project.todoList.push(todo);
}

const removeTodoFromProject = (todo, project) => {
    const indexOfTodo = findIndexOfTodoInProject(todo, project);
    project.todoList.splice(indexOfTodo, 1);
}

const findIndexOfTodoInProject = (todo, project) => {
    return project.todoList.indexOf(todo);
}

export {projectFactory, addTodoToProject, removeTodoFromProject};