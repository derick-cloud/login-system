const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, hash], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(400).send('Erro ao registrar usuário');
    }
    res.send('Usuário cadastrado com sucesso!');
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).send('Erro no servidor');
    if (results.length === 0) return res.status(400).send('Usuário não encontrado');

    const user = results[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) return res.status(401).send('Senha incorreta');

    res.send(`Bem-vindo, ${user.name}!`);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`);
});
