import fs from "fs/promises";
import path from "path";

// define the path to the tasks JSON file
const TASKS_FILE = path.join(process.cwd(), "tasks.json");

// read tasks from the JSON file
async function readTasks() {
  try {
    const data = await fs.readFile(TASKS_FILE, "utf8");
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      return [];
    }
    throw err;
  }
}

// write tasks to the JSON file
async function writeTasks(tasks) {
  await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// assign a unique ID to a new task
async function assignId() {
  const tasks = await readTasks();
  const maxId =
    tasks.length > 0 ? Math.max(...tasks.map((t) => parseInt(t.id) || 0)) : 0;
  return (maxId + 1).toString();
}

// check if a task with same description exists
async function taskExists(task) {
  const tasks = await readTasks();
  return tasks.some((t) => t.description.toLowerCase() === task.toLowerCase());
}

// find a task by its ID
async function findTaskById(id) {
  const tasks = await readTasks();
  return tasks.find((t) => t.id === id);
}

export { assignId, readTasks, writeTasks, taskExists, findTaskById };
