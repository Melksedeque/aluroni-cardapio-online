import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Prato from './pages/Prato';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { lazy, Suspense } from 'react';

const Cardapio = lazy(() => import('./pages/Cardapio'));
const PaginaPadrao = lazy(() => import('./components/PaginaPadrao'));

export default function AppRouter() {
  return (
    <main className="container">
      <BrowserRouter>
        <Suspense fallback={<div>Carregando...</div>}>
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
        </Suspense>
      </BrowserRouter>
    </main>
  );
}
