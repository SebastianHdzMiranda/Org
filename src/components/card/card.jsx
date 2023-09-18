import './card.css'
import {AiFillCloseCircle,AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const Card = (props)=> {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos;
    const {eliminarColaborador, like} = props;

    function manejarEliminacion(e) {
        eliminarColaborador(id);
    }
    function heart(e) {
        like(id);
    }

    return (
        <div className='card'>

            <AiFillCloseCircle onClick={manejarEliminacion} className='eliminar'/>

            <div className="header-card" style={props.color}>
                <img src={foto} alt={nombre} />
            </div>
            <div className='info'>
                <p className='nombre'>{nombre}</p>
                <p>{puesto}</p>

                {fav ? <AiFillHeart color='red' onClick={heart} className='heart'/> : <AiOutlineHeart onClick={heart} className='heart'/>}
                
                

            </div>
        </div>
                
    )
}

export default Card;