console.log('hello world 2');
require('dotenv').config()//***your magic line
const express = require('express');
const app = express();
const mdl = require('./models');
console.log(process.env.NODE_ENV);


// LIST ALL User.
app.get('/', async function (req, res) {
  console.log('call');
  mdl.User.findAll({})
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

// INSERT NEW USER

app.get('/insert', async (req, res) => {

  try {
    const user = await mdl.User.create({
      firstName: 'John31',
      lastName: 'Doe31',
      email: 'demo@demo.com31',
    })
    return res.json(user)
  } catch (error) {
    return res.status(500).json(error);
  }

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});





