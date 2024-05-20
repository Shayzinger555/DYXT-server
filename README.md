# Project Name - Server

This is the server-side application of DYXT , built using Node.js and Express.js. The server follows the MVC architecture and includes various features such as password encryption, validation middleware, user blocking, and more.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)


## Features

- MVC architecture
- Password encryption
- Validation middleware using Zod
- JWT-based authentication
- User blocking functionality
- Logging with Pino
- Database connection with Mongoose
- Hot reloading with Nodemon

## Technologies Used

- Node.js
- Express.js
- Mongoose
- JWT (JSON Web Tokens)
- Zod (for validation)
- Pino (for logging)
- Nodemon (for development)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/project-name.git
    cd project-name/server
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root of the server directory and add your environment variables:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

## Usage

1. Start the server:
    ```sh
    npm run dev
    ```

2. The server will start on `http://localhost:5000`.

## API Endpoints

### User Routes

- `POST /users/register` - Register a new user
- `POST /users/login` - Login a user
- `GET /users/profile` - Get user profile (protected route)

### Item Routes

- `POST /:collection` - Create a new item in the collection
- `GET /:collection` - Get all items in the collection
- `GET /:collection/:item_id` - Get an item by ID
- `PUT /:collection/:item_id` - Update an item by ID
- `DELETE /:collection/:item_id` - Delete an item by ID
- `PATCH /:collection/:item_id/:keyToPatch` - Patch an item by ID and key
- `GET /:collectionForAuth/:collection/:item_id/:condition` - Get items by a condition



