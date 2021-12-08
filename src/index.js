import './style.css';
import initializeWorkspace from './modules/logic.js';
import todoFactory from './modules/todo.js';
import { createTodoRow } from './modules/workspace.js';

initializeWorkspace();

const todo = todoFactory("Collect Fitness Tracker at HomeTeamNS","test","test","test","test","test");
createTodoRow(todo);