console.log('hello world');
require('dotenv').config()//***your magic line
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(
    process.env.db_name,
    process.env.db_user,
    process.env.db_password,
    {
        host: process.env.db_host,
        dialect: 'postgres'
    });

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });