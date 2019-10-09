https://sequelize.org/master/manual/migrations.html

# important

To ba able to run cli you need to login to docker container first

```
docker-compose run app bash
// app is the container name.

```
Then
```
npm install --save sequelize-cli
npx sequelize-cli init
```
## Config file

config/config.json

```
  "development": {
    "username": "postgres",
    "password": "pass",
    "database": "postgres",
    "host": "postgres",
    "dialect": "postgres"
  },
```

# Creating first Model (and Migration)

```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```
This will do following

Create a model file user in models folder
Create a migration file with name like XXXXXXXXXXXXXX-create-user.js in migrations folder

# Running Migrations

```
npx sequelize-cli db:migrate
```

# Creating First Seed

```
npx sequelize-cli seed:generate --name demo-user
```

This command will create a seed file in seeders folder. File name will look something like XXXXXXXXXXXXXX-demo-user.js. It follows the same up / down semantics as the migration files.

Now we should edit this file to insert demo user to User table.

```
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
```

# Running Seeds

```
npx sequelize-cli db:seed:all
```
# Dynamic Configuration

change models/index.js
```
from
const config = require(__dirname + '/../config/config.json')[env];
to
const config = require(__dirname + '/../config/config.js')[env];
```
### config/config.js

```
require('dotenv').config()//need this
module.exports = {
  development: {
    username: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name,
    host: process.env.db_host,
    dialect: 'postgres'
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
  }
};

```