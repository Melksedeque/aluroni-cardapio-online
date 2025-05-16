import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
// import Cardapio from './pages/Cardapio';
import Sobre from './pages/Sobre';
import Prato from './pages/Prato';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';
import Footer from './components/Footer';
import PaginaPadrao from './components/PaginaPadrao';
import { lazy } from 'react';

const Cardapio = lazy(() => import('./pages/Cardapio'));

export default function AppRouter() {
  return (
    <main className="container">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="prato/:id" element={<Prato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
