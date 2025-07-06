# http5222: express app with json API
This is a Node.js Express application that serves as an **admin dashboard** for managing a personal portfolio. It connects to a MongoDB Atlas database and allows you to **add and delete** items in two collections: `projects` and `skills`. Admin pages are rendered using the **Pug** template engine and are styled to be responsive and presentable.

---
## Live Demo
[live](https://assignment-1-f3cg.onrender.com)

---
## Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Backend web framework
- **MongoDB Atlas** – Cloud-based NoSQL database
- **Mongoose** – for MongoDB
- **Pug** – Template engine for rendering HTML on the server
- **CSS** – Responsive styling for admin pages
- **Render** – Deployment platform

---
## Features

- Admin pages to:
  - Add new projects and skills
  - Delete existing projects and skills
- API endpoints to return JSON arrays for:
  - `/api/projects`
  - `/api/skills`

