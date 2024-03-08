import Link from "next/link"
import styles from './ContactNavigation.module.css'


export function ContactNavigation () {

    return(
        <div  className={styles.main}>
            <div className={styles.contacto}>
                <p>+34 959 30 02 11</p>
                <p>L-V De 9:00 a 14:00</p>
            </div>   
            <div className={styles.redes}>
                <a href="https://twitter.com/AytoGibraleon" target="_blank"><i className="material-icons">share</i></a>
                <a href="https://www.facebook.com/ayuntamiento.gibraleon?fref=ts" target="_blank"><i className="material-icons">share</i></a>
                <a href="https://www.instagram.com/ayto_gibraleon/" target="_blank"><i className="material-icons">share</i></a>
            </div>   
        </div>
    )
  }