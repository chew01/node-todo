import './style.css';
import todoFactory from './modules/todo.js';
import { projectFactory, addTodoToProject, removeTodoFromProject } from './modules/project.js';
import { createProjectTab, initializeWorkspace } from './modules/workspace.js';

const test = todoFactory('test', 'test', 'test', 'test', 'test', 'test');
test.title = 'nothing'
const test1 = todoFactory('test1', 'test2', 'test3', 'test3', 'test2', 'test2');
test.title = 'something'

/*
const project = projectFactory('default');
addTodoToProject(test, project);
addTodoToProject(test1, project);
const project1 = projectFactory('new tab1');
const project2 = projectFactory('dnew tab 2');

createProjectTab(project);
createProjectTab(project1);
createProjectTab(project2);

console.table(project.todoList);
*/

initializeWorkspace();