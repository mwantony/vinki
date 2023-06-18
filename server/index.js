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
  const nome = req.body.name;
  const tipoDeConta = req.body.tipoDeConta;
  const cpf = req.body.cpf;
  const dataDeNascimento = req.body.date;
  const telefone = req.body.tel;
  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      db.query(
        "INSERT INTO usuarios (email, password, tipoDeConta, nome, cpf, dataDeNascimento, telefone) VALUE (?,?,?,?,?,?,?)",
        [email, password, tipoDeConta, nome, cpf, dataDeNascimento, telefone],
        (error, response) => {
          if (err) {
            res.send(err);
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
      res.send({ msg: "Usuário logado" });
    }
    if (result.length > 0) {
      if (password == result[0].password) {
        res.send(result[0]);
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

app.get("/endereco/:id", (req, res) => {
  const usuario = req.params.id;
  db.query(
    "SELECT * FROM enderecos WHERE usuarioEndereco = ?",
    [usuario],
    (err, result) => {
      if(err) {
        res.send(err)
      } else {
        res.send(result[0])
      }
    }
  );
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
