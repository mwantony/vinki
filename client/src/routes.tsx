import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Inicio from "./pages/Inicio";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Login from "./components/Login";
import Cadastrar from "./components/Cadastrar";
import NotFound from "./components/NotFound";
import MinhaConta from "pages/MinhaConta";
export default function AppRouter() {
    const [aparecer, setAparecer] = useState(false)
    const [selecionado, setSelecionado] = useState(0)
    const dadosUsuario = localStorage.getItem('Usuário')
    const dadosUsuarioParsed = dadosUsuario !== null ? JSON.parse(dadosUsuario) : null;
    const nome = dadosUsuarioParsed.nome
    const tipoDeConta = dadosUsuarioParsed.tipoDeConta
    const emailUser = dadosUsuarioParsed.email
    const telefoneUser = dadosUsuarioParsed.telefone
    const dataDeNascimento = dadosUsuarioParsed.dataDeNascimento
    const cpfUser = dadosUsuarioParsed.cpf
    const senhaUser = dadosUsuarioParsed.password
    useEffect(() => {
        
    }, [])
    return(
        <BrowserRouter>
            <Cabecalho selecionado={selecionado} setSelecionado={setSelecionado} aparecer={aparecer} setAparecer={setAparecer}></Cabecalho>
            <Routes>
                <Route path="/" element={<Inicio></Inicio>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/cadastrar" element={<Cadastrar></Cadastrar>}></Route>
                <Route path="/conta" element={<MinhaConta senhaUser={senhaUser} emailUser={emailUser} telefoneUser={telefoneUser} dataDeNascimento={dataDeNascimento} tipoDeConta={tipoDeConta} cpfUser={cpfUser} nome={nome}></MinhaConta>}></Route>
                <Route path="/*" element={<NotFound setSelecionado={setSelecionado}></NotFound>}></Route>
            </Routes>
            <Rodape></Rodape>
        </BrowserRouter>
    )
}