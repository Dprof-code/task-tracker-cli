#!/usr/bin/env node

import createTask from "../src/commands/create-task.js";

console.log("Welcome to my CLI tool!");
console.log("This tool helps you manage your projects efficiently.");
console.log("Use 'task-cli --help' to see available commands.");

const args = process.argv.slice(2);
const command = args[0];
const value = args[1];

if (command === "add") {
  if (typeof value !== "string") {
    console.error("Please provide a valid task description.");
    process.exit(1);
  }
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
