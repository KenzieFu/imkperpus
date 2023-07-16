const Sequelize = require("sequelize");

const sequelize = new Sequelize("db_tubes_imk", "root", "", {
  host: "localhost",
  port:"3306",
  dialect: "mysql",
});

module.exports = sequelize;
