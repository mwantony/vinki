import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Inicio from "./pages/Inicio";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Login from "./components/Login";
import Cadastrar from "./components/Cadastrar";
import NotFound from "./components/NotFound";
import MinhaConta from "pages/MinhaConta";
import Axios from "axios";
const usuario = {
  idusuarios: "",
  nome: "",
  tipoDeConta: "",
  email: "",
  telefone: "",
  cpf: "",
  password: "",
  dataDeNascimento: "",
};
const endereco = {
  id: "",
  usuarioEndereco: "",
  cep: "",
  complemento: "",
  logradouro: "",
  numero: "",
  cidade: "",
  uf: "",
  pontoDeRef: "",
};
if (!localStorage.getItem("usuario")) {
  localStorage.setItem("usuario", JSON.stringify(usuario));
}
if (!localStorage.getItem("endereco")) {
  localStorage.setItem("endereco", JSON.stringify(endereco));
}
const usuarioLocal = localStorage.getItem("usuario");
const usuarioLocalParsed =
  usuarioLocal !== null ? JSON.parse(usuarioLocal) : null;
const data = {
  email: usuarioLocalParsed.email,
  password: usuarioLocalParsed.password,
};
const urlAtual = window.location.href;
console.log(urlAtual);

export const atualiza = async () => {
  fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Resposta:", result);
      localStorage.setItem("usuario", JSON.stringify(result));
      fetch(`http://localhost:3001/endereco/${result.idusuarios}`)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("endereco", JSON.stringify(data));
        });
    })
    .catch((error) => {
      console.error("Erro:", error);
      // Trate o erro
    });
};
if (usuarioLocalParsed.nome !== "") {
  atualiza();
  console.log("o");
}

const verifica = () => {
  switch (urlAtual) {
    case "http://localhost:3000/":
      return 0;
    case "http://localhost:3000/carrinho":
      return 1;
    case "http://localhost:3000/favoritos":
      return 2;
    case "http://localhost:3000/emalta":
      return 3;
    case "http://localhost:3000/ofertas":
      return 4;
  }
  return 0 - 1;
};

export default function AppRouter() {
  const [aparecer, setAparecer] = useState(false);
  const [selecionado, setSelecionado] = useState(verifica);
  const dadosUsuario = localStorage.getItem("usuario");
  const dadosUsuarioParsed =
    dadosUsuario !== null ? JSON.parse(dadosUsuario) : null;

  const enderecoUsuario = localStorage.getItem("endereco");
  const enderecoUsuarioParsed =
    enderecoUsuario !== null ? JSON.parse(enderecoUsuario) : null;
  const nome = dadosUsuarioParsed.nome;
  const tipoDeConta = dadosUsuarioParsed.tipoDeConta;
  const emailUser = dadosUsuarioParsed.email;
  const telefoneUser = dadosUsuarioParsed.telefone;
  const dataDeNascimento = dadosUsuarioParsed.dataDeNascimento;
  const cpfUser = dadosUsuarioParsed.cpf;
  const senhaUser = dadosUsuarioParsed.password;

  useEffect(() => {}, [dadosUsuario]);
  return (
    <BrowserRouter>
      <Cabecalho
        endereco={endereco}
        usuario={usuario}
        nome={nome}
        selecionado={selecionado}
        setSelecionado={setSelecionado}
        aparecer={aparecer}
        setAparecer={setAparecer}
      ></Cabecalho>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/cadastrar" element={<Cadastrar></Cadastrar>}></Route>
        <Route
          path="/conta"
          element={
            <MinhaConta
              enderecoUsuarioParsed={enderecoUsuarioParsed}
              senhaUser={senhaUser}
              emailUser={emailUser}
              telefoneUser={telefoneUser}
              dataDeNascimento={dataDeNascimento}
              tipoDeConta={tipoDeConta}
              cpfUser={cpfUser}
              nome={nome}
            ></MinhaConta>
          }
        ></Route>
        <Route
          path="/*"
          element={<NotFound setSelecionado={setSelecionado}></NotFound>}
        ></Route>
      </Routes>
      <Rodape></Rodape>
    </BrowserRouter>
  );
}
