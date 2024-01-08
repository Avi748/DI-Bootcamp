import { TodoList } from './todo.js';

const newTask = new TodoList("Exercise 4", "Not Done")
newTask.addTask("Exercise 4.1", "Not Done")
newTask.addTask("Exercise 4.2", "Almost Done")
newTask.addTask("Exercise 4.3", "Done")
newTask.markTask(2)
console.log(newTask.task_list)
