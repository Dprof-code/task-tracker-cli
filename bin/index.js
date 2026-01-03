#!/usr/bin/env node

import createTask from "../src/commands/create-task.js";
import deleteTask from "../src/commands/delete-task.js";
import updateTask from "../src/commands/update-task.js";
import updateTaskStatus from "../src/commands/update-task-status.js";
import listTasks from "../src/commands/list-task.js";

console.log("Welcome to my CLI tool!");
console.log("This tool helps you manage your projects efficiently.");
console.log("Use 'task-cli --help' to see available commands.");

const args = process.argv.slice(2);
const command = args[0];

if (command === "add") {
  const value = args[1];
  if (value) {
    createTask(value)
      .then((message) => {
        console.log(message);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  } else {
    console.error("Please provide a task description.");
  }
}

if (command == "update") {
  const id = args[1];
  const newDesc = args[2];

  if (id && newDesc) {
    updateTask(id, newDesc)
      .then((message) => {
        console.log(message);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  } else {
    console.error("Please provide both task ID and new task description.");
  }
}

if (command == "delete") {
  const id = args[1];

  if (id) {
    deleteTask(id)
      .then((message) => {
        console.log(message);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  } else {
    console.error("Please provide the task ID to delete.");
  }
}

if (command == "mark-in-progress") {
  const id = args[1];
  const newStatus = "in-progress";
  if (id) {
    updateTaskStatus(id, newStatus)
      .then((message) => {
        console.log(message);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  } else {
    console.error("Please provide the task ID to update status.");
  }
} else if (command == "mark-done") {
  const id = args[1];
  const newStatus = "done";
  if (id) {
    updateTaskStatus(id, newStatus)
      .then((message) => {
        console.log(message);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  } else {
    console.error("Please provide the task ID to update status.");
  }
}

if (command == "list") {
  const statusFilter = args[1] || null;
  if (statusFilter && !["todo", "in-progress", "done"].includes(statusFilter)) {
    console.error(
      "Invalid status filter. Use 'todo', 'in-progress', or 'done'."
    );
  } else {
    listTasks(statusFilter)
      .then((tasks) => {
        if (tasks && tasks.length > 0) {
          console.log("Tasks:", tasks);
        } else {
          console.log("No tasks found.");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }
}
