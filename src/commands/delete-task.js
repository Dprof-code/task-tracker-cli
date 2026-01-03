import { readTasks, writeTasks, findTaskById } from "../utils/utils.js";

async function deleteTask(id) {
  try {
    if (!(await findTaskById(id))) {
      return `Task with ID ${id} not found`;
    }

    const tasks = await readTasks();
    const filteredTasks = tasks.filter((task) => task.id !== id);
    await writeTasks(filteredTasks);
    return `Task with ID ${id} deleted successfully.`;
  } catch (err) {
    console.error("Error deleting task:", err);
    throw err;
  }
}

export default deleteTask;