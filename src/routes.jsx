import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Cardapio from './pages/Cardapio';
import Sobre from './pages/Sobre';
import Menu from './components/Menu';
import PaginaPadrao from './components/PaginaPadrao';

export default function AppRouter() {
    return (
        <main>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}