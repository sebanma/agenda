const { Sequelize } = require('sequelize');

const createConnection =  (db = 'agenda') => {
  const sequelize = new Sequelize(db, 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  });

  return sequelize;
}

const connection = createConnection();


module.exports = { createConnection, connection };