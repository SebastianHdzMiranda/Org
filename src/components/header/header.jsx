/* jsx -> la estructura que vamos a utilizar para representar componentes, esto produce elementos de react

En lugar de separar artificialmente tecnologías poniendo el maquetado y la lógica en archivos separados, React separa intereses con unidades ligeramente acopladas llamadas “componentes” que contienen ambas. 
*/



// para vincular el archivo css de header se importa
import './header.css'

// Esto es un componente funcional
function Header() {
    return( 
        /* como class es una palabra reservada en js, para nombrar clases se tendra que usar className */
        <header className='header'>
            <img src='/img/header.png' alt='Org'/>
        </header>
    );
}

export default Header;