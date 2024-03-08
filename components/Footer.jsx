import Link from "next/link"
import styles from './Footer.module.css'


export function Footer () {

    return(
        <footer className={styles.footer}>
            <div  className={styles.flex}>
                <div className={styles.ayto}>
                    <img src="/images/logo blanco.png"></img>     
                </div>
                <div className={styles.datos}>
                    <div className={styles.contacto}> 
                        <p><i className="material-icons">location_on</i>Edificio Galeón, Av. de la Marina, 7,<br></br>21100 Punta Umbría, Huelva</p>
                        <p><i className="material-icons">phone</i>959 49 51 00</p>
                        <Link href="mailto:turismo@puntaumbria.es"><i className="material-icons">mail</i>turismo@puntaumbria.es</Link>
                    </div>   
                    <div className={styles.redes}> 
                        <Link href="https://twitter.com/AytoPuntaUmbria?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><img src="/images/twitter.png"></img></Link>
                        <Link href="https://www.facebook.com/people/Ayuntamiento-De-Punta-Umbr%C3%ADa/100072512790629/" target="_blank"><img src="/images/facebook.png"></img></Link>
                        <Link href="https://www.youtube.com/@ayuntamientodepuntaumbria4887" target="_blank"><img src="/images/youtube.png"></img></Link>
                    </div>      
                </div>
            </div>
            <div className={styles.enlaces}>
                <a href="">Accesibilidad</a>
                <a href="">Aviso legal</a>
                <a href="">Política de privacidad</a>
                <a href="">Mapa web</a>         
            </div>
        </footer>
    )
  }