# Help Center API
This is a basic Node.js application with a few api endpoints. It uses express for routing and MongoDB as the database. 

## Features
- **Ping Endpoint:** Check if server is running.
- **Card Management:** Create and retrieve cards.

## Folder Structure
├── app.js <br/>
├── server.js <br/>
├── controllers/ <br/>
├── models/ <br/>
├── routes/ <br/>
├── package.json <br/>
└── README.md <br/>

## Prerequisites
Before you begin, ensure you have the following installed on your system:
- Node.js
- npm
- MongoDB (local installation or cloud database - atlas)

## Setup Instructions:

### 1. Clone the repo
First, clone the repo to your local machine using git:
```bash
git clone https://github.com/navneetkumar22/helpcenter_api.git
cd helpcenter_api
```

### 2. Install dependencies:
Install the required dependencies using npm:
```bash
npm install
```

### 3. Environment variables:
Create .env file in the root of the application and following variables:
```js
MONGO_URI='yourDatabaseURL'
PORT='port'
```

### 4. Run the application
Start the server using following command:
```bash
npm start
```

### 5. Test the Endpoints:
You can test the available API endpoints using tool like Postman.

- **Ping the server:**
    - GET /ping
    - check if the server is running

- **Create a Card**
    - POST /cards
    - Requires title and description in the request body.

- **Get All Cards**
    - GET /cards
    - Retrives all cards from the database.

- **Get a Card**
    - GET /cards/:id
    - Retrieve a card with its id.