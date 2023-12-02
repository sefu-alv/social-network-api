# Social Network API

## Description
This is a RESTful API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation
To install the necessary dependencies, run the following command:
npm :
`express`
`mongoose`
`dotenv`
`moment`
`nodemon`

## Usage
To start the server, run the following command:
`nodemon`

## API Routes
- `GET /api/users`: Get all users
- `POST /api/users`: Create a new user
- `GET /api/users/:id`: Get a user by id
- `PUT /api/users/:id`: Update a user by id
- `DELETE /api/users/:id`: Delete a user by id
- `POST /api/users/:id/friends/:friendId`: Add a friend to a user
- `DELETE /api/users/:id/friends/:friendId`: Remove a friend from a user
- `GET /api/thoughts`: Get all thoughts
- `POST /api/thoughts`: Create a new thought
- `GET /api/thoughts/:id`: Get a thought by id
- `PUT /api/thoughts/:id`: Update a thought by id
- `DELETE /api/thoughts/:id`: Delete a thought by id
- `POST /api/thoughts/:id/reactions`: Add a reaction to a thought
- `DELETE /api/thoughts/:id/reactions/:reactionId`: Delete a reaction from a thought

## License
This project is licensed under the MIT license.

## Questions
