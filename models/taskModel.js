let tasks = [];
let idCounter = 1;

function createTask(title) {
  const task = {
    id: idCounter++,
    title,
    completed: false
  };

  tasks.push(task);
  return task;
}

function getTasks() {
  return tasks;
}

function updateTask(id, newData) {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;

  Object.assign(task, newData);
  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
}

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask
};