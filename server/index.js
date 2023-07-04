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
        /*         res.send({
          idusuarios: "",
          nome: "",
          tipoDeConta: "",
          email: "",
          telefone: "",
          cpf: "",
          password: "",
          dataDeNascimento: "",
        }); */
        res.send({ msg: "Senha Incorreta" });
      }
    } else {
      /*       res.send({
        idusuarios: "",
        nome: "",
        tipoDeConta: "",
        email: "",
        telefone: "",
        cpf: "",
        password: "",
        dataDeNascimento: "",
      }); */
      res.send({ msg: "Senha Incorreta" });
    }
  });
});

app.get("/endereco/:id", (req, res) => {
  const usuario = req.params.id;
  db.query(
    "SELECT * FROM enderecos WHERE usuarioEndereco = ?",
    [usuario],
    (err, result) => {
      if (err) {
        res.send({
          id: "",
          usuarioEndereco: "",
          cep: "",
          complemento: "",
          logradouro: "",
          numero: "",
          cidade: "",
          uf: "",
          pontoDeRef: "",
        });
      } else {
        console.log(result);
        if (!result[0]) {
          res.send({
            id: "",
            usuarioEndereco: "",
            cep: "",
            complemento: "",
            logradouro: "",
            numero: "",
            cidade: "",
            uf: "",
            pontoDeRef: "",
          });
        } else {
          res.send(result[0]);
        }
      }
    }
  );
});

app.post("/endereco", (req, res) => {
  const usuario = req.body.usuarioEndereco;
  const cep = req.body.cep;
  const complemento = req.body.complemento;
  const logradouro = req.body.logradouro;
  const numero = req.body.numero;
  const cidade = req.body.cidade;
  const uf = req.body.uf;
  const pontoDeRef = req.body.pontoDeRef;
  console.log(usuario);
  db.query(
    "UPDATE enderecos SET cep=?, complemento=?, logradouro=?, numero=?, cidade=?, uf=?, pontoDeRef=? WHERE usuarioEndereco = ?",
    [cep, complemento, logradouro, numero, cidade, uf, pontoDeRef, usuario],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Feito");
      }
    }
  );
});

app.post("/moveis", (req, res) => {
  const categoria = req.body.categoria;
  db.query(
    "SELECT * FROM produtos WHERE categoria=?",
    [categoria],
    (err, result) => {
      if (err) {
        res.send(err.data);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/produto/:idProduto", (req, res) => {
  const idProduto = req.params.idProduto;
  db.query(
    "SELECT * FROM produtos WHERE idprodutos=?",
    [idProduto],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result[0])
      }
    }
  );
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
