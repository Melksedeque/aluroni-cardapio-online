import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css';
import './index.css';
import BrowserRouter from './routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter />
  </StrictMode>,
)
