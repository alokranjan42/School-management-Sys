# School Management Mini System

## About Project

This project is a School Management Mini System in which an Admin can add students, view their details, and assign tasks to them. Only the admin can access the portal by registering and logging in. The admin can add students, delete students, assign tasks to students, and mark their tasks as completed.

## Features

1. Admin authentication  
2. Student CRUD  
3. Task assignment  
4. Mark task completed  
5. Protected dashboard  

## Tech Stack

### Frontend
- React.js
- CSS

#### Libraries
- react-router-dom
- axios
- vite

### Backend
- Node.js
- Express.js

#### Libraries
- mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors
- cookie-parser

### Database
- MongoDB

## Folder Structure

```bash
.
├── .gitignore
├── backend
│   ├── package-lock.json
│   ├── package.json
│   └── src
│       ├── app.js
│       ├── controller
│       │   ├── auth.controller.js
│       │   ├── student.controller.js
│       │   └── task.controller.js
│       ├── db
│       │   └── db.js
│       ├── middlewares
│       │   └── auth.middleware.js
│       ├── models
│       │   ├── student.model.js
│       │   ├── task.model.js
│       │   └── user.model.js
│       ├── routes
│       │   ├── auth.routes.js
│       │   ├── student.routes.js
│       │   └── task.routes.js
│       ├── server.js
│       └── utils
│           ├── ApiError.js
│           ├── ApiResponse.js
│           └── AsyncHandler.js
└── frontend
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    ├── src
    │   ├── Api
    │   │   └── Api.jsx
    │   ├── Components
    │   │   ├── Footer
    │   │   ├── ProtectedRoute
    │   │   └── navbar
    │   ├── Features
    │   │   ├── Auth
    │   │   ├── Student
    │   │   └── Task
    │   ├── Pages
    │   │   ├── Dashboard.css
    │   │   └── Dashboard.jsx
    │   ├── Router.jsx
    │   ├── Shared
    │   │   └── Styles.css
    │   ├── assets
    │   ├── index.css
    │   └── main.jsx
    └── vite.config.js
## Setup##

--Backend setup --
cd backend
npm install
npm run dev


--frontend setup --
cd frontend
npm install
npm run dev


-- Environment .env file --

-> Add .env file in root of  backend  folder and .env file in root of frontend folder
-->  Env file format 

1.PORT=8004
2.MONOGO_URI=your_mongodb_connection_string
3.ACCESS_TOKEN_SECRET=your_access_token_secret
4.REFRESH_TOKEN_SECRET=your_refresh_token_secret




## API Endpoints ##

### Auth
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout


### Students
- POST /api/students
- GET /api/students
- PUT /api/students/:id
- DELETE /api/students/:id


### Tasks
- POST /api/tasks
- GET /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id












