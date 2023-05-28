import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Inicio from "./pages/Inicio";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
export default function AppRouter() {
    const [aparecer, setAparecer] = useState(false)
    const [selecionado, setSelecionado] = useState(0)
    return(
        <BrowserRouter>
            <Cabecalho selecionado={selecionado} setSelecionado={setSelecionado} aparecer={aparecer} setAparecer={setAparecer}></Cabecalho>
            <Routes>
                <Route path="/" element={<Inicio></Inicio>}></Route>
            </Routes>
            <Rodape></Rodape>
        </BrowserRouter>
    )
}