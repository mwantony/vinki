const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const cpf = req.body.cpf
  console.log(cpf)
  console.log(name)
  console.log(password)
  const dataDeNascimento = req.body.cpf
  const tipoDeConta = 'sdasd'
  console.log(dataDeNascimento)
  const telefone = req.body.tel
  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      /*       bcrypt.hash(password, saltRounds, (err, hash) => {
       */ db.query(
        "INSERT INTO usuarios (email, password, tipoDeConta, nome, cpf, dataDeNascimento, telefone) VALUES (?,?,?,?,?,?,?)",
        [email, password, tipoDeConta, name, cpf, dataDeNascimento,telefone /* , name, cpf, dataDeNascimento, telefone */],
        (error, response) => {
          if (error) {
            res.send(error);
          }

          res.send({ msg: "Usuário cadastrado com sucesso" });
        }
      );
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      if (password == result[0].password) {
        res.send({ msg: "Usuário logado" });
      } else {
        res.send({ msg: "Senha incorreta" });
      }
      /*       bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: "Usuário logado" });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      }); */
    } else {
      res.send({ msg: "Usuário não registrado!" });
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
