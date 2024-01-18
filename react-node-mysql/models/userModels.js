import { Sequelize } from "sequelize";
import dbConnection from "../config/Databases.js";

const { DataTypes } = Sequelize;

const User = dbConnection.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await dbConnection.sync();
})();
