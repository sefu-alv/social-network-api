const mongoose = require('mongoose');
const db = require('../models');
const connection = require('../config/connection');

// user seed data to be inserted into the database for testing
const userSeed = [
  {
    username: 'testUser1',
    email: 'test1@test.com',
    friendCount:25,
    friends: [
      'testUser2'
    ],
    thoughts: [
      'wow this is really neat!'
    ],
    reactions: [
      {
        reactionBody: '😆',
        username: 'testUser2'
      }
    ],
  },
  {
    username: 'testUser2',
    email: 'test2@test.com',
    friendCount:1,
    friends: [
      'testUser1'
    ],
    thoughts: [
      'hello world!'
    ],
   reactions: [
      {
        reactionBody: '😆',
        username: 'testUser1'
      }
    ],
  },

  {
    username: 'testUser3',
    email: 'test3@test.com',
    friendCount:2,
    friends: [
      'testUser1',
      'testUser2'
    ],
    thoughts: [
      'cool app!',
      'this is neat!'
    ],
    reactions: [
      {
        reactionBody: '😆',
        username: 'testUser1'
      },
      {
        reactionBody: '😎',
        username: 'testUser2'
      }
    ],
  }
];

// Connect to the Mongo DB

mongoose.connection.on('error', (err) => console.error(err));

mongoose.connection.once('open', async () => {
  console.log('connected');

  // Delete the collections if they exist
  let userCheck = await mongoose.connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await mongoose.connection.dropCollection('users');
  }

  // Insert the seed data
  await db.User.collection.insertMany(userSeed);

  console.log('Seeding complete! 🌱');
  process.exit(0);
});