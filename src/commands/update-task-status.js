import { readTasks, writeTasks, findTaskById } from "../utils/utils.js";

async function updateTaskStatus(id, newStatus) {
  try {
    if (!(await findTaskById(id))) {
      return `Task with ID ${id} not found.`;
    }

    const tasks = await readTasks();
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: newStatus,
          updatedAt: new Date().toISOString,
        };
      }
      return task;
    });
    await writeTasks(updatedTasks);
    return `Task with ID ${id} status updated to ${newStatus} successfully.`;
  } catch (err) {
    console.error("Error updating task status:", err);
    throw err;
  }
}

export default updateTaskStatus;
