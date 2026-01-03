#!/usr/bin/env node

import createTask from "../src/commands/create-task.js";
import updateTask from "../src/commands/update-task.js";

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
