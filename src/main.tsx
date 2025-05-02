import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css';
import './index.css';
import Inicio from './pages/Inicio';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Inicio />
  </StrictMode>,
)
