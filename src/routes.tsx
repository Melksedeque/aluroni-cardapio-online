import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Prato from './pages/Prato';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { lazy, Suspense } from 'react';

const PaginaPadrao = lazy(() => import('./components/PaginaPadrao'));
const Cardapio = lazy(() => import('./pages/Cardapio'));
const Inicio = lazy(() => import('./pages/Inicio'));
const Sobre = lazy(() => import('./pages/Sobre'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
