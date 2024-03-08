import Link from 'next/link'
import styles from '../pages.module.css'

export const metadata = {
  title: 'Mantenimiento - Ayuntamiento'
}

export default function Mantenimiento() {
    return (
      <main className={`${styles.main} ${styles.mantenimiento}`}>
            <h1>Página en<br></br>construcción</h1>  
            <div className={styles.barra}>
                <p>0%</p>
                <div className={styles.progressbar}>
                    <div className={styles.progress} style={{ width: '80%' }}></div>
                    <p>80%</p>
                </div>
                <p>100%</p>
            </div>

            <div>
                <Link href="/">Volver a la página principal de la web</Link>
            </div>
      </main>
    )
  }
  