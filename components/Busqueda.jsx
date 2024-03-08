import styles from './Buscador.module.css'

export function Busqueda ({ home }) {

    return(
        <div className={home ? styles.buscadorHome : styles.buscador}>
                <input type="text" placeholder='¿Qué buscas?'/>
                <button><i className="material-icons">search</i></button>
        </div>
    )
}
