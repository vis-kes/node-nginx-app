const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,     // e.g. your-rds-instance.abcxyz.rds.amazonaws.com
  user: process.env.MYSQL_USER,     // e.g. admin
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();


//RDS
