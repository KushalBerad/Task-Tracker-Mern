import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/tasks"
});

// get tasks
export const getTasks = () => API.get("/");

// create task
export const createTask = (task) => API.post("/", task);

// update task
export const updateTask = (id, task) => API.put(`/${id}`, task);

// delete task
export const deleteTask = (id) => API.delete(`/${id}`);