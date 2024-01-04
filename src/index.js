import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//cria o root da pagina e renderiza nossa aplicação nele epssa o elemento "root" como paramentro
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

