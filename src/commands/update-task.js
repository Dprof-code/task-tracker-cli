import { readTasks, writeTasks, findTaskById } from "../utils/utils.js";

async function updateTask(id, newDesc) {
    try {
        if (!(await findTaskById(id))) {
            return `Task with ID ${id} not found.`;
        }

        const tasks = await readTasks();
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    description: newDesc,
                    updatedAt: new Date().toISOString()
                };
            }
            return task;
        });
        await writeTasks(updatedTasks);
        return `Task with ID ${id} updated successfully.`;
    } catch (err) {
        console.error("Error updating task:", err);
        throw err;
    }
}

export default updateTask;