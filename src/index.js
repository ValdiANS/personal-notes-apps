import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/main.css';
import './styles/sm-style.css';
import './styles/md-style.css';
import './styles/lg-style.css';

import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
