module.exports = {
    DB_HOST: process.env.DB_HOST || "mysql",
    DB_PORT: process.env.DB_PORT || 3306,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME || "library_db",
    REDIS_URL : process.env.REDIS_URL || "redis",
    REDIS_PORT : process.env.REDIS_PORT || 6379,
    SESSION_SECRET : process.env.SESSION_SECRET
};