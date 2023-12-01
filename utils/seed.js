const connection = require('..config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => { 
    console.log('Connected to database!');
let usersCheck = await connection.db.listCollections({name: 'users'}).toArray();
if (usersCheck.length) {
    await connection.db.dropCollection('users');
}

const users[];
const thoughts[];
const friendCount