# Task-manager-crud-API
Assignment 3 for backend development and mern integration

A simple Task Manager backend API built using Node.js, Express, and MongoDB (Mongoose).
This project provides full CRUD functionality along with validation, centralized error handling, and advanced query features like pagination, filtering, and sorting.

## Features

- Create, Read, Update, and Delete tasks (CRUD)
- MongoDB database using Mongoose
- Centralized error handling
- Input validation
- Pagination, filtering, and sorting
- RESTful API structure
- Tested using Postman

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (for API testing)

## Setup Instructions

1. Clone the Repository
2. Install Dependencies : 
```npm install```
3. Configure Environment Variables :
Create a .env file in the root directory:
```PORT=5000```
```MONGO_URI=mongodb://127.0.0.1:27017/taskmanager```
Make sure MongoDB is running locally
(MongoDB Compass or MongoDB service)
4. Start the Server
```npm start```

Server will run on:
```http://localhost:5000```

## MongoDB 

- No need to manually create collections
- MongoDB automatically creates:
Database: taskmanager
Collection: tasks
- Data is created when you send a POST request

## API Endpoints
1. Get All Tasks
GET /api/tasks
Query Params:
page – page number
limit – items per page
completed=true/false – filter by status
sort=createdAt – sort by date

2. Get Task by ID
GET /api/tasks/:id

3. Create Task
POST /api/tasks

Body (JSON):
{
  "title": "Finish assignment",
  "description": "Backend task manager",
  "completed": false
}

4. Update Task
PUT /api/tasks/:id


Body (JSON):

{
  "title": "Updated title",
  "completed": true
}

5. Delete Task
DELETE /api/tasks/:id

## Validation Rules

- title is required
- title must be at least 3 characters
- completed must be boolean
- Invalid IDs return 404 Not Found

## Error Handling

Centralized error handling middleware covers:
- 400 – Bad Request
- 404 – Resource Not Found
- 500 – Internal Server Error
MongoDB connection errors

## Testing with Postman

- All endpoints are tested using Postman
- A Postman collection is included with:
Get all tasks
Get task by ID
Create task
Update task
Delete task

* Postman collection exported as JSON and attached in submission.


Author:
Komal Joshi
