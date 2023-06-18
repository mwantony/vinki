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

const atualiza = async () => {
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
      localStorage.setItem('usuario', JSON.stringify(result))
    })
    .catch((error) => {
      console.error("Erro:", error);
      // Trate o erro
    });
};
if (localStorage.usuario) {
  atualiza();
  console.log("o");
}
export default function AppRouter() {
  const [aparecer, setAparecer] = useState(false);
  const [selecionado, setSelecionado] = useState(0);
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
