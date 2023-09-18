import './formulario.css';
/* el uso de index en el nombre del archivo js o jsx permite omitir el nombre en la url de la importacion */
import CampoForm from '../campoForm/campoForm';
import ListaOpciones from '../listaOpciones/listaOpciones';
import Boton from '../boton/boton';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


const Formulario = (props)=> {

    const {registrarColaborador, crearEquipo} = props;

    // STATES
    const [nombre, setNombre] = useState('');
    const [puesto, setPuesto] = useState('');
    const [foto, setFoto] = useState('');
    const [equipo, setEquipo] = useState('');
    const [titulo, setTitulo] = useState('');
    const [color, setColor] = useState('');

    // manejar envio colaborador
    const manejarEnvio = (e)=>{
        e.preventDefault();
        
        const datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
            id: uuidv4(),
            fav: false,
        }
        registrarColaborador(datosEnviar);
    }

    const manejarNuevoEquipo = (e)=>{
        e.preventDefault();
        
        // enviando un objeto directo en el parametro
        crearEquipo({titulo, colorPrimario:color});
    }

    return (
        
        <section className='formulario contenedor'>
            {/* onSubmit es un evento, se representa de esta manera desde HTML */}
            <form onSubmit={manejarEnvio}>
                <h3>Rellena el formulario para crear el colaborador.</h3>

                {/* 
                    enviando datos a props, estos pueden ser strings, numeros, booleanos y hasta funciones. 
                    
                    -si algun componente no tiene una propiedad definida que si tienen los demas, este lo ignorara y no pasara nada. vease como 'Nombre' y 'Puesto' tienen la propiedad required y 'Foto' No lo tiene, como no le pasamos esa propiedad al objeto props, este lo ignarara por que ese required se pasara al input con required={props.required}

                    - la forma de enviar funciones es = NombrePropiedad = {NombreFuncion}
                */}
                <CampoForm 
                    titulo='Nombre' 
                    placeholder='Ingresar Nombre' id='nombre'  
                    required 
                    valor={nombre} 
                    actualizarValor={setNombre}
                />
                <CampoForm 
                    titulo='Puesto' 
                    placeholder='Ingresar Puesto' 
                    id='puesto'  
                    required
                    valor={puesto} 
                    actualizarValor={setPuesto}
                />
                <CampoForm 
                    titulo='Foto' 
                    placeholder='Ingresar Enlace de Foto de github' id='foto'
                    valor={foto} 
                    actualizarValor={setFoto}
                />
                <ListaOpciones 
                    valor={equipo}
                    actualizarValor={setEquipo}
                    equipos={props.equipos}
                />
                <Boton>
                    {
                        /* 
                            -Otra forma de agregar propiedades al props es escribiendo en medio del componente, este se asigna a children, es decir un hijo del props con ese nombre. 
                            
                            -Si se añaden mas propiedades, no se creara otra propiedad al objeto props, mas bien children sera un arreglo y podras seleccionar que elemento quieres por su indice (desde la creacion del componente).
                        */
                    }
                    Crear
                </Boton>
            </form>

            <form onSubmit={manejarNuevoEquipo}>
                <h3>Rellena el formulario para crear el equipo.</h3>

            
                <CampoForm 
                    titulo='Titulo' 
                    placeholder='Ingresar Titulo' id='titulo'  
                    required 
                    valor={titulo} 
                    actualizarValor={setTitulo}
                />
                <CampoForm 
                    titulo='Color' 
                    placeholder='Ingresar Color en HEX' 
                    id='color'  
                    required
                    valor={color} 
                    actualizarValor={setColor}
                    type= 'color'
                />
                <Boton>
                    Registrar equipo
                </Boton>
            </form>
        </section>

    );
};

export default Formulario;