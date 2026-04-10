const taskService = require('../services/taskService');

function handleCreateTask(req, res) {
  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      const task = taskService.createTask(data.title);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(task));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: error.message }));
    }
  });
}

function handleGetTasks(req, res) {
  const tasks = taskService.getTasks();

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(tasks));
}

function handleUpdateTask(req, res, id) {
  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      const updated = taskService.updateTask(id, data);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(updated));
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: error.message }));
    }
  });
}

function handleDeleteTask(req, res, id) {
  try {
    const result = taskService.deleteTask(id);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: error.message }));
  }
}

module.exports = {
  handleCreateTask,
  handleGetTasks,
  handleUpdateTask,
  handleDeleteTask
};