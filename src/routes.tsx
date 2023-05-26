import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Inicio from "./pages/Inicio";
import Cabecalho from "./components/Cabecalho";
export default function AppRouter() {
    return(
        <BrowserRouter>
            <Cabecalho></Cabecalho>
            <Routes>
                <Route path="/" element={<Inicio></Inicio>}></Route>
            </Routes>
        </BrowserRouter>
    )
}