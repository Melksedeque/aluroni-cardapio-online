import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio';
import Cardapio from './pages/Cardapio';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'element={<Inicio />} />
                <Route path='/cardapio'element={<Cardapio />} />
            </Routes>
        </BrowserRouter>
    );
}