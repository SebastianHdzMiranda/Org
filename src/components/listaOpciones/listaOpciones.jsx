import './listaOpciones.css';



function ListaOpciones(props) {

    const manejarCambio = (e)=>{
        props.actualizarValor(e.target.value);
    }
    
    return (
        <div className='campo'>
            <label htmlFor="equipos">Equipos</label>
            <select id="equipos" value={props.valor} onChange={manejarCambio}>

                {/* iteracion en arreglos IMPORTANTE
                    De esta forma creamos los option por medio de un arreglo iterable con map. ojoo map se usa por que crea un arreglo nuevo 

                    al no agregar key, en la consola saldra un error, y esto es por que react necesita un id unico que le ayuda a saber cuando tiene que hacer un cierto comportamiento. en este caso el id sera el indice de cada elemento
                    
                */}
                <option disabled hidden value='' defaultValue=''>Seleccionar equipo</option>
                
                {props.equipos.map( (equipo, index)=>{
                    return (
                        <option 
                            key={index}
                            value={equipo}
                        >
                            {equipo}
                        </option>
                    )
                })}


            </select>
        </div>
    );
}

export default ListaOpciones;