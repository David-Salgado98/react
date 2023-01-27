import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cambio from './App';
import { NombreCompleto as Name } from './component/nombrecompleto';

let objw = {
  nieto:18
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cambio />
    <Name edad={18} nombre="chap" />
    <Cambio name="David" age="18" />
    

    <Cambio />
  </React.StrictMode>
);


