// hook
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
// css
import './App.css';
// imporrtando componentes 
import Header from './components/header/header';
import Formulario from './components/formulario/formulario';
import MiOrg from './components/miOrg/miOrg';
import Equipo from './components/equipo/equipo';
import Footer from './components/footer/footer';

/* COMPONENTES
  Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y retornan elementos de React que describen lo que debe aparecer en la pantalla. en este proyecto 'App' es el componente mayor, y dentro de el tendra otros componentes hijos como header y formulario, etc.
*/
function App() {
  /* USESTATE 
  -----------------------------------------------*/
  const [mostrarForm, setMostrarForm] = useState(true);
    // Lista de equipos (para equipo.jsx)
  let equiposStorage = JSON.parse(localStorage.getItem('equipos'));
  const [equipos, setEquipos] = useState(equiposStorage || [
    {id:uuidv4(),titulo:'Programación',colorPrimario:'#57C278',colorSecundario: '#D9F7E9'},
    {id:uuidv4(),titulo:'Front End',colorPrimario:'#82CFFA',colorSecundario: '#E8F8FF'},
    {id:uuidv4(),titulo:'Data Science',colorPrimario:'#A6D157',colorSecundario: '#F0F8E2'},
    {id:uuidv4(),titulo:'Devops',colorPrimario:'#E06B69',colorSecundario: '#FDE7E8'},
    {id:uuidv4(),titulo:'UX y Diseño',colorPrimario:'#DB6EBF',colorSecundario: '#FAE9F5'},
    {id:uuidv4(),titulo:'Mobile',colorPrimario:'#FFBA05',colorSecundario: '#FFF5D9'},
    {id:uuidv4(),titulo:'Innovación y Gestión',colorPrimario:'#FF8A29',colorSecundario: '#FFEEDF'},
  ]);
    /* LocalArray me sirve para localStorage, si hay algo en localStoraga asignalo, si no un arreglo vacio 
  =================================================*/
  let localArray = JSON.parse(localStorage.getItem('colaboradores')) || [];
  const [colaboradores, setColaboradores] = useState(localArray || []);
  // Ternario -> condicion ? seMuestra : noSeMuestra
  // operador de cortocircuito -> condicion && seMuestra


  /*FUNCIONES 
  ----------------------------------------------*/
  // crear funcion con funcion 'setMostrarForm'
  const actualizarForm = ()=> setMostrarForm(!mostrarForm);


  // Actualizar color
  const actualizarColor = (color, id)=>{
    const equiposActualizados = equipos.map( (equipo)=>{
      if (equipo.id === id) {
        equipo.colorPrimario = color;        
      }
      // con este return decimos que aunque halla propiedades dentro del objeto que no cumplan con la condicion quiero esos datos igualmente, quiero que me los returne
      return equipo;
    });

    setEquipos(equiposActualizados);
    sincronizarStorage('equipos', equiposActualizados);
  }

  /* DATOS DE COLABORADOR (desde formulario)
    adquirimos los datos importantes del usuario que se registro. una forma de enviar datos de un componente hijo hacia un componente padre es por medio de un funcion y envirla por medio de props 
  */
  const registrarColaborador = (colaborador)=>{
    setColaboradores([...colaboradores, colaborador]);

    /*============================================== */
    localArray = [...colaboradores, colaborador];
    sincronizarStorage('colaboradores', localArray);
  };

  const eliminarColaborador = (id)=>{
    /*=============================================== */
    console.log(`Eliminando el elemento: ${id}`);

    const colaboradoresActualizados = colaboradores.filter(colaborador=> colaborador.id !== id);

    setColaboradores(colaboradoresActualizados);

    sincronizarStorage('colaboradores', colaboradoresActualizados);

  };

  const crearEquipo = (nuevoEquipo)=>{
    nuevoEquipo.id = uuidv4();

    
  /* forma correcta de actualizar el estado INMUTABILIDAD
    La razón por la que no funciona setEquipos(equipos.push(nuevoEquipo)) y funciona setEquipos([...equipos, {...nuevoEquipo}]) se debe a cómo React maneja las actualizaciones de estado y cómo debes actualizar correctamente los estados en React.
    
    En React, el estado debe ser inmutable, lo que significa que no debes modificar directamente el estado existente, como lo estás intentando hacer con equipos.push(nuevoEquipo). Cuando utilizas push, estás modificando el arreglo equipos existente, y React no detecta automáticamente ese cambio, por lo que no volverá a representar el componente.
    
    La forma correcta de actualizar el estado en React es creando una nueva copia del estado con los cambios que deseas aplicar. En el caso de setEquipos([...equipos, {...nuevoEquipo}]), estás creando una nueva matriz que contiene todos los elementos anteriores de equipos más el nuevo equipo. Esta nueva matriz es una referencia diferente, lo que hace que React detecte el cambio y vuelva a representar el componente.
  */
  setEquipos([...equipos, {...nuevoEquipo}]);

  //  localStorage
   equiposStorage = [...equipos, {...nuevoEquipo}];
   sincronizarStorage('equipos', equiposStorage);

  }

  const like = (id)=>{
    // console.log('like', id);
    const cambioLike = colaboradores.map( (colaborador)=>{
      if (colaborador.id === id) {
        // fav va ha ser igual a la negacion de fav (false/true)
        colaborador.fav = !colaborador.fav;
      }
      // Siempre returna el colaborador completo, si no se rompe el programa
      return colaborador;
    })

    setColaboradores(cambioLike);
    sincronizarStorage('colaboradores', cambioLike);

  }

  // LocalStorage
  function sincronizarStorage(nombre, input) {
    localStorage.setItem(nombre, JSON.stringify(input));
  }

  return (
    <div>

      {/* todo lo que se pone en llaves se interpreta como js, es una manera de interaccion entre DOM y js de manera sencillisima. formas distintas de mandar a llamar funciones (componentes) en react:*/}
      {/* {Header()} */}
      {/* <Header></Header> */}
      <Header/>       

      {/* condiciones
        condicion con ternario: 
          si  mostrarForm es true 
            - muestrame el formulario
          si es false
            - quiero un elemento vacio (lo ignora al renderizar el codigo)

          condicion con operador de cortocircuito: 
            si mostrarForm es true
              - muestrame el formulario
            si mostrarForm es false
              - No hagas nada
      */}
      {/* {mostrarForm ? <Formulario/> : <></>} */}
      {mostrarForm && <Formulario 
        equipos={equipos.map((equipo)=> equipo.titulo )} 
        registrarColaborador= {registrarColaborador}
        crearEquipo={crearEquipo}
      />}

      {/* enviando la funcion actualizarForm a partir de props */}
      <MiOrg actualizarForm={actualizarForm}/>

      {
        equipos.map((equipo, index)=> 
          <Equipo 
            datos={equipo} 
            key={index} 
            colaboradores= {colaboradores.filter((colaborador)=> colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}

          />
        )
      }

      <Footer />

    </div>
  );
}

export default App;

