const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL RDS');
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() AS now', (err, result) => {
    if (err) return res.send('DB Error: ' + err.message);
    res.send(`Current time from RDS MySQL: ${result[0].now}`);
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

