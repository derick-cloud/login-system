const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('❌ Erro ao conectar ao MySQL:', err.message);
    return;
  }
  console.log('✅ Conectado ao MySQL');
});

module.exports = db;


db.connect((err) => {
  if (err) {
    console.error('❌ Erro ao conectar ao MySQL:', err);
    return;
  }
  db.query('SELECT DATABASE() AS db', (err, res) => {
    if (err) throw err;
    console.log('✅ Conectado ao banco:', res[0].db);
  });
});

