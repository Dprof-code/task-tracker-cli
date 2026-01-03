import { readTasks } from "../utils/utils.js";

async function listTasks(statusFilter = null) {
  try {
    const tasks = await readTasks();

    if (statusFilter) {
      const filteredTasks = tasks.filter((task) => task.status == statusFilter);
      return filteredTasks;
    } else {
      return tasks;
    }
  } catch (err) {
    console.error("Error listing tasks:", err);
    throw err;
  }
}

export default listTasks;
