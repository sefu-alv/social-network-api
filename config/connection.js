const { connect, connection } = require('mongoose');

// Connect to database
connect('mongodb://127.0.0.1:27017/social-network-api');

// Export connection
module.exports = connection;
