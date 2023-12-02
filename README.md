# Social Network API :iphone:

## Description  :memo:
This is a RESTful API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Users can create an account, add other users to their friend list, and post their thoughts. They can also react to their friends' thoughts and see a list of all the thoughts they and their friends have posted.

The API is built with `Node.js` and `Express.js`, and it uses `MongoDB` as the database and `Mongoose` as the ORM. It follows the MVC (Model-View-Controller) design pattern, with separate models for users and thoughts, and controllers that handle the business logic for each route.

The API provides a number of different endpoints for creating, reading, updating, and deleting data. It uses middleware functions for error handling and validating data.

## Table of Contents
- [Technologies Used](#technologies-used) :computer:
- [Installation](#installation) :wrench:
- [Usage](#usage) :bulb:
- [API Routes](#api-routes) :seedling:
- [License](#license) :page_facing_up:
- [Questions](#questions) :question:

## Technologies Used :computer:
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation :wrench:
To install the necessary dependencies, run the following command:

npm install 
- `express`
- `mongoose`
- `dotenv`
- `moment`
- `nodemon`

## Usage :bulb:
To start the server, run the following command:
`nodemon`

## API Routes :seedling:
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

## License :page_facing_up:
This project is licensed under the MIT license.

## Questions :question:
If you have any question please feel free to reach out:

GitHub: [:cat:](https://github.com/sefu-alv) 

Email :email: : sefufim@outlook.com

