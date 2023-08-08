const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "syed", //database
  "root", //user
  "root", //password
  {
    host: "localhost",
    dialect: "mysql", //`dialect: ‘mysql’, ‘mariadb’, ‘postgres’, ‘mssql’.
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = sequelize;
