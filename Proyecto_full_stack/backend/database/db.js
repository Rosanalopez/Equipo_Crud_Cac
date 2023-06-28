const Sequelize = require("sequelize");
const dbConfig = require("../config/config.js");


const db = new Sequelize(
    dbConfig.DB_NAME,
    dbConfig.DB_USER,
    dbConfig.DB_PASSWORD,
    {
        host: dbConfig.DB_HOST,
        dialect: "mysql",
        port: dbConfig.DB_PORT,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        logging: false
    }
);

module.exports = db;