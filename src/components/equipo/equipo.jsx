import './equipo.css';
import Card from '../card/card';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props)=> {
    // accediendo a los datos del props con destructuring
    let {titulo, colorPrimario, colorSecundario, id} = props.datos;
    const {colaboradores, eliminarColaborador,actualizarColor, like} = props;
    colorSecundario = hexToRgba(colorPrimario, .6);

    // console.log(props.colaboradores);

    /* ESTILOS CSS
        propiedades css. dentro de react se pueden dar estilos css por medio de objetos. Poniendo 'style={}' en la etiqueta html y dentro de esas llaves crear un objeto ya sea dentro de style directamente o crearlo y despues pasarle el nombre (del objeto como en este proyecto).

        Nota: si se crea el objeto directo dentro de style={}, se tendra que crear otras llaves (las del objeto) dentro de las llaves que corresponden a la sintaxis de react: 
            style={{color: 'red'}}
    */
    const borderLine = {borderBottomColor: colorPrimario};
    const bgCard = {backgroundColor: colorPrimario}
    // hexToRgba(colorPrimario, .6) -> funcion que es de la dependencia hexToRgba
    const bg = {backgroundColor: colorSecundario};

    return (<>
        {
            // si hay por lo menos un colaborador creame el espacio del equipo 
            colaboradores.length > 0 &&
            <section className="equipo" style={bg}>
                <input 
                    type="color" 
                    value={colorPrimario}
                    onChange={e=> (actualizarColor(e.target.value, id))}
                />

                <h3 style={borderLine}>{titulo}</h3>
                <div className="colaboradores contenedor">

                    {/* <Card color={bgCard}/> 
                    <Card color={bgCard}/> 
                    <Card color={bgCard}/>  */}

                    {colaboradores.map((colaborador, index)=>

                            <Card 
                                color={bgCard} 
                                key={index} 
                                datos={colaborador}
                                eliminarColaborador={eliminarColaborador}
                                like={like}
                            /> 
                    )}
        
                </div>
            </section>
        }
    </>)
    
}

export default Equipo;