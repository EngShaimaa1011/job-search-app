# Job Search App

A simple *Job Search Application* built with *Node.js, **Express.js, and **MongoDB(mongoose)*.  
This project allows users to search for jobs based on title and type, register/login, and view job details.

---

## Features

- Search jobs by *title* and *type* (remote/on-site)
- User *registration and login* (authentication)
- RESTful API endpoints for managing jobs
- Error handling and data validation

---

## Technologies

- *Backend:* Node.js, Express.js  
- *Database:* MongoDB   
- *API Testing:* Postman  
- *Environment Variables:* dotenv  

---

## Installation

1. Clone the repository:

bash
git clone https://github.com/EngShaimaa/job-search-app.git
cd job-search-app


2. Install dependencies:

bash
npm install


3. Create a .env file with the following variables:

env
PORT=XXX
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret


4. Run the server:

bash
npm run dev.

---

## API Endpoints

### Jobs

- *Get all jobs / Search jobs*  
GET /api/jobs?title=backend&type=remote  

- *Get job by ID*  
GET /api/jobs/:id  

- *Create a new job*  
POST /api/jobs  
Body (JSON):
json
{
  "title": "Backend Developer",
  "type": "remote",
  "description": "Job description here"
}


- *Update a job*  
PUT /api/jobs/:id  

- *Delete a job*  
DELETE /api/jobs/:id  

### Authentication

- *Register*  
POST /api/auth/register  
Body (JSON):
json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}


- *Login*  
POST /api/auth/login  
Body (JSON):
json
{
  "email": "john@example.com",
  "password": "yourpassword"
}


---

## Postman Collection

You can import the *Postman collection* from the postman_collection.json file to test all APIs.

---

## License

This project is licensed under the MIT License.
