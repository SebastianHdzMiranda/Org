import { useState } from 'react';
import './campoForm.css';


function CampoForm(props) {
    // la ventaja de usar destructuring aqui es que por defecto type no sera undefined (undefined aparece en los componentes donde no se manda la propiedad type), sera text y solo cambiara el valor de la variable si es que se declara por medio de props. en este caso queremos que un solo un input sea type color.
    const { type = 'text' } = props;

    /* props:
        datos que nosotros le podemos mandar a nuestros componentes, y apartir de esos datos podemos hacer que se comporten de alguna forma. es un objeto y podemos acceder a sus propiedades como un objeto.
    */
    // console.log(props);
    const placeHolderMoodificado = `${props.placeholder}...`

    const manejarCambio = (e)=>{ 
        /* Componente Controlado
            cada vez que halla un cambio en el input, se mandara a llamar esta funcion y se le actualizara el estado 'props.valor', ya que este es igual al value se vera reflejado en el input 

            Precisamente eso es un componente controlado. Quitamos responsabilidades al navegador y nosotros nos encargamos de ellas
        */
        props.actualizarValor(e.target.value);
    }

    console.log(type);
    
    return (
        <div className={`campo campo-${type}`}>
            <label 
                htmlFor={props.id} 
            >
                    {props.titulo}
            </label>
            <input 
                id={props.id}
                // cambiamos ty
                type={type}     
                placeholder={placeHolderMoodificado} 
                required={props.required}
                // asignamos el valor de value a la variable de estado 'valor'
                value={props.valor}
                // esto es un evento:
                onChange={manejarCambio}
            />
        </div>
    );
}

export default CampoForm;

