import { useState } from 'react';
import './miOrg.css'

function MiOrg(props) {

    /* HOOKS 
        funcionalidades que nos ayudan a trabajar con el comportamiento de react.

        tipos de funciones:

        useState -> utilizando el estado 
            - Permite que los componentes funcionales gestionen su propio estado interno
            - useState se importa de la biblioteca React y se utiliza para declarar una variable de estado junto con su valor inicial en un componente funcional:
                import { useState } from 'react';

            - Sintaxis :
                const [estado, setEstado] = useState(valorInicial);

                donde:  
                    - estado -> es la variable de estado que representa el valor actual del estado.
                    - setEstado -> es una función que se utiliza para actualizar el estado, se puede pasar parametro para que el valor del estado se actualice
                    - valorInicial -> es el valor inicial del estado.

    */
   // console.log(useState);
    // const [mostrar, setMostrar] = useState(true);

    // const manejarClick = ()=>{
    //     // quiero que seas el valor contrario a como se encuentre la variable mostrar 
    //     setMostrar(!mostrar);
        
    // }

    return (
        <section className="orgSection contenedor">
            <h2>Mi organización</h2>
            <img src='/img/add.png' alt="add" onClick={props.actualizarForm}/>
        </section>
    );
}

export default MiOrg;