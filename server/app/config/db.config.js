module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "3141",
    DB: "cinema",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };