import Link from 'next/link'
import styles from './not-found.module.css'

export default function Home() {
  return (
    <section className={styles.main}>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link href="/">Volver a la página de inicio</Link>
    </section>
  )
}
