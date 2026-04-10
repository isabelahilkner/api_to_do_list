const taskModel = require('../models/taskModel');

function createTask(title) {
  if (!title) {
    throw new Error('Título é obrigatório');
  }

  return taskModel.createTask(title);
}

function getTasks() {
  return taskModel.getTasks();
}

function updateTask(id, data) {
  const updated = taskModel.updateTask(id, data);
  if (!updated) {
    throw new Error('Tarefa não encontrada');
  }

  return updated;
}

function deleteTask(id) {
  const success = taskModel.deleteTask(id);
  if (!success) {
    throw new Error('Tarefa não encontrada');
  }

  return { message: 'Removida' };
}

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask
};