require('dotenv').config()//***your magic line
module.exports = {
    development: {
      username: process.env.db_user,
      password: process.env.db_password,
      database: process.env.db_name,
      host: 'postgres',
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