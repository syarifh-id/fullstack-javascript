import Sequelize from "sequelize";

const database = "lat1";
const userDb = "root";
const passDb = "";
const host = "localhost";

const dbConnection = new Sequelize(database, userDb, passDb, {
  host: host,
  dialect: "mysql",
});

export default dbConnection;
