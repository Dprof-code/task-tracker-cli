import { assignId, readTasks, writeTasks, taskExists } from "../utils/utils.js";

async function createTask(task) {
  const taskData = {
    id: await assignId(),
    description: task,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  try {
    const tasks = await readTasks();
    if (await taskExists(task)) {
      return "Task already exists.";
    }
    tasks.push(taskData);
    await writeTasks(tasks);
    return `Task added successfully (ID: ${taskData.id})`;
  } catch (err) {
    console.error("Error creating task:", err);
    throw err;
  }
}

export default createTask;
