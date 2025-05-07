import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Cardapio from './pages/Cardapio';
import Menu from './components/Menu';

export default function AppRouter() {
    return (
        <main>
            <BrowserRouter>
                <Menu />
                <header className={styles.header}>
                    <div className={styles.header__text}>
                        A casa do código e da massa
                    </div>
                </header>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/cardapio' element={<Cardapio />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}