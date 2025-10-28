# 💻 Sistema de Login e Registro — Node.js + MySQL

Este projeto é um sistema completo de **login e cadastro de usuários**, com frontend moderno e backend integrado ao MySQL.

## 🚀 Tecnologias
- Node.js
- Express
- MySQL2
- dotenv
- bcrypt (para senhas)
- HTML, CSS, JavaScript

 ## 📂 Estrutura do projeto
 login.system/
 ├── public/
 │   ├── index.html
 │   ├── login.html
 │   ├── register.html
 │   ├── *.css
 │   ├── register.js
 ├── server.js
 ├── db.js
 ├── .env
 ├── package.json
 └── README.md
## 🗄️ Estrutura do banco de dados
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255)
);
## ✨ Autor
Feito com 💙 por **Derick Eduardo dos Santos Orcelino**
📫 [GitHub](https://github.com/derick-cloud)


   
 ## ⚙️ Como executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/derick-cloud/login-system.git
## ⚙️ Instalação

```bash
npm install
node server.js

