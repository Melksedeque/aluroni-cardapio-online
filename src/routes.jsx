import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Cardapio from './pages/Cardapio';
import Menu from './components/Menu';

export default function AppRouter() {
    return (
        <main>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/cardapio' element={<Cardapio />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}