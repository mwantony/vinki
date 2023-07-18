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
import Endereco from "components/Endereco";
import Moveis from "pages/Moveis";
import Loading from "components/Loading";
import Carrinho from "pages/Carrinho";
import PaginaProduto from "pages/PaginaProduto";
import Search from "pages/Search";
import FinalizarCompra from "pages/FinalizarCompra";
import Pedidos from "pages/Pedido";
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
const carrinho: any = [];

const carrinhoLocal = localStorage.getItem("carrinho");
let carrinhoLocalParsed =
  carrinhoLocal !== null ? JSON.parse(carrinhoLocal) : null;
if (!localStorage.getItem("carrinho")) {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}
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

export const atualizaCarrinho = () => {
  localStorage.setItem("carrinho", JSON.stringify(carrinhoLocalParsed));
  window.location.reload();
};

const prdo: any = []
const atu = async () => {
  await carrinhoLocalParsed.map((item: any, index: any) =>
    Axios.get(
      `${process.env.REACT_APP_API_URL}/produto/${item.idprodutos}`
    ).then((res: any) => {
      prdo.push({
        link: `https://vinki.vercel.app/produto/${item.idprodutos}`,
        titulo: res.data.titulo,
        categoria: res.data.categoria,
        promocao: res.data.promocao,
        linkImagem: res.data.link,
        idprodutos: res.data.idprodutos
      })
    })
  );
  const prdo1 = prdo
  setTimeout(() => {
    console.log(prdo)
    localStorage.setItem("carrinho", JSON.stringify(prdo));
  },2000)
/*   localStorage.setItem("carrinho", JSON.stringify(prdo));
 */};

export const atualiza = async () => {
  fetch(`${process.env.REACT_APP_API_URL}/login`, {
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
      fetch(`${process.env.REACT_APP_API_URL}/endereco/${result.idusuarios}`)
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
    atu()
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
  const [carrinhoItem, setCarrinhoitems] = useState(carrinhoLocalParsed.length)
  const [aparecer, setAparecer] = useState(false);
  const [selecionado, setSelecionado] = useState(verifica);
  const dadosUsuario = localStorage.getItem("usuario");
  const dadosUsuarioParsed =
    dadosUsuario !== null ? JSON.parse(dadosUsuario) : null;

  const [carrinho1, setCarrinho1] = useState(
    carrinhoLocal !== null ? JSON.parse(carrinhoLocal) : null
  );

  const enderecoUsuario = localStorage.getItem("endereco");
  const enderecoUsuarioParsed =
    enderecoUsuario !== null ? JSON.parse(enderecoUsuario) : null;
  const nome = dadosUsuarioParsed.nome;
  const id = dadosUsuarioParsed.idusuarios;
  const tipoDeConta = dadosUsuarioParsed.tipoDeConta;
  const emailUser = dadosUsuarioParsed.email;
  const telefoneUser = dadosUsuarioParsed.telefone;
  const dataDeNascimento = dadosUsuarioParsed.dataDeNascimento;
  const cpfUser = dadosUsuarioParsed.cpf;
  const senhaUser = dadosUsuarioParsed.password;

  const cep = enderecoUsuarioParsed.cep;
  const complemento = enderecoUsuarioParsed.complemento;
  const logradouro = enderecoUsuarioParsed.logradouro;
  const numero = enderecoUsuarioParsed.numero;
  const cidade = enderecoUsuarioParsed.cidade;
  const uf = enderecoUsuarioParsed.uf;
  const pontoDeRef = enderecoUsuarioParsed.pontoDeRef;
  const [agr, setAgr] = useState(0);
  const [produtosRandom, setProdutosRandom] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState(
    produtos.filter((item: any) =>
      item.titulo.toLowerCase().includes(input.toLowerCase())
    )
  );
  useEffect(() => {
    if (agr === 0) {
      Axios.get(`${process.env.REACT_APP_API_URL}/produtos`)
        .then((res: any) => {
          setProdutos(res.data);
          setAgr(1);
        })
        .then(() => {
          Axios.get(`${process.env.REACT_APP_API_URL}/produtosrandom`).then(
            (res) => {
              setProdutosRandom(res.data);
            }
          );
        });
    }
  }, [agr, dadosUsuario]);
  return (
    <BrowserRouter>
      <Cabecalho
      carrinhoItems={carrinhoItem}
        produtosCarrinho={carrinhoLocalParsed}
        input={input}
        setInput={setInput}
        produtos={produtos}
        setFilteredData={setFilteredData}
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
        <Route path="/pedidos" element={<Pedidos></Pedidos>}></Route>
        <Route
          path="/carrinho"
          element={
            <Carrinho
            id={id}
            carrinhoItems={carrinhoItem}
            setCarrinhoItems={setCarrinhoitems}
              nome={nome}
              setCarrinho1={setCarrinho1}
              produtos={carrinho1}
            ></Carrinho>
          }
        ></Route>
        <Route path="/moveis" element={<Moveis></Moveis>}></Route>
        <Route
          path="/produto/:idProduto"
          element={
            <PaginaProduto
              nome={nome}
              carrinhoLocalParsed={carrinhoLocalParsed}
              setSelecionado={setSelecionado}
            ></PaginaProduto>
          }
        ></Route>
        <Route
          path="/endereco"
          element={
            <Endereco
              id={id}
              complemento={complemento}
              logradouro={logradouro}
              numero={numero}
              cidade={cidade}
              uf={uf}
              pontoDeRef={pontoDeRef}
              cep={cep}
              nome={nome}
            ></Endereco>
          }
        ></Route>
        <Route
          path="/conta"
          element={
            <MinhaConta
              id={id}
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
          path="/search"
          element={
            <Search
              filteredData={filteredData}
              input={input}
              produtos={produtos}
              produtosRandom={produtosRandom}
              setFilteredData={setFilteredData}
              setInput={setInput}
            ></Search>
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
