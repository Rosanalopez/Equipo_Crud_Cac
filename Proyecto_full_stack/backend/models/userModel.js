const db = require("../database/db.js");
const DataTypes = require("sequelize"); // Import the built-in data types.

const userModel = db.define("user",{
    "username": {"type": DataTypes.STRING},
    "password": {"type": DataTypes.STRING},
    "createdAt": {"type": DataTypes.DATE},
    "updatedAt": {"type": DataTypes.DATE}
})

module.exports = userModel;