import fs from "fs/promises";
import path from "path";

const TASKS_FILE = path.join(process.cwd(), "tasks.json");

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

async function writeTasks(tasks) {
  await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

async function assignId() {
  const tasks = await readTasks();
  const maxId =
    tasks.length > 0 ? Math.max(...tasks.map((t) => parseInt(t.id) || 0)) : 0;
  return (maxId + 1).toString();
}

async function taskExists(task) {
    const tasks = await readTasks();
    return tasks.some(t => t.description.toLowerCase() === task.toLowerCase());
}

export { assignId, readTasks, writeTasks, taskExists };