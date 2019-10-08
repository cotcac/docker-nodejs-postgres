console.log('hello world 2');
require('dotenv').config()//***your magic line
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

console.log('hello world 2');

// test



const express = require('express');
const app = express();
const User = sequelize.define('user', {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  }, {
    // options
  });
app.get('/', async function (req, res) {
    console.log('call');
   

    await User.sync({ force: true }).then(() => {
        // Now the `users` table in the database corresponds to the model definition
        return User.create({
            firstName: 'John',
            lastName: 'Hancock'
        });
    });
    await User.findAll().then(users => {
        console.log("All users:", JSON.stringify(users, null, 4));
        res.json(users)
    });
 
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});





