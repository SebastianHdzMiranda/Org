// React es la biblioteca que nos permite construir interfaces de usuario, mientras que ReactDOM se encarga de renderizar esas interfaces en el navegador.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Selecciona el elemento del DOM con el id 'root' (de index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

/* renderiza la aplicacion en el elemento root
  .render() -> es un metodo propio de react, se utiliza para renderizar componentes de React en el DOM del navegador
*/
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//<App />: Esto representa el componente principal de la aplicación. Puedes pensar en <App /> como la raíz de tu aplicación React. Dentro de <App />, generalmente tendrás otros componentes que componen tu interfaz de usuario.


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
