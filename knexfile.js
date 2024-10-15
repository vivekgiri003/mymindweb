require("dotenv").config();

// console.log("Host:", process.env.DB_HOST);
// console.log("Database:", process.env.DB_NAME);
// console.log("User:", process.env.DB_USER);
// console.log("Password:", process.env.DB_PASSWORD);

module.exports = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 10058,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: "utf8",
  },
  
};


