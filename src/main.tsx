import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css';
import './index.css';
import Inicio from './pages/Inicio';
import Cardapio from './pages/Cardapio';

const componenteAtual = window.location.pathname === '/' ? <Inicio /> : <Cardapio>;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {componenteAtual}
  </StrictMode>,
)
