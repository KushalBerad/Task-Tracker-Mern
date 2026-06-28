# Task Tracker Web Application

A full stack task management web application built using the MERN stack.

This application allows users to create, manage, update, filter and delete tasks with deadline tracking and persistent database storage.

---

## Live Demo

Frontend:
https://task-tracker-mern-blond.vercel.app/

Backend:
https://task-tracker-mern-4pr7.onrender.com

---

## Features Implemented

### Core Features

✔ Create new tasks  
✔ View all tasks  
✔ Mark tasks as completed  
✔ Delete tasks  
✔ Dynamic updates without page refresh  
✔ MongoDB database integration  
✔ REST API architecture  
✔ Responsive design for desktop and mobile  

---

### Additional Features

✔ Deadline/date selection  
✔ Task status tracking  
✔ Filter tasks by:

- All Tasks  
- Pending Tasks  
- Completed Tasks  

✔ Dashboard statistics:

- Total tasks  
- Pending tasks  
- Completed tasks  

✔ Form validation:

- Empty title blocked  
- Empty description blocked  
- Empty deadline blocked  
- Past deadline blocked  

---

## Tech Stack

### Frontend

- React.js
- Axios
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

---

## Project Structure

Task-Tracker/

frontend/
src/
components/
services/

backend/
controllers/
models/
routes/
config/

---

## API Endpoints

GET /api/tasks

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

---

## Installation

### Frontend

npm install

npm run dev

### Backend

npm install

npm run dev

---

## Future Improvements

- Authentication system
- Edit task functionality
- Drag and drop task management
- Notifications
- Light/Dark mode toggle

---

Built as part of Full Stack Developer Internship Technical Assignment.
