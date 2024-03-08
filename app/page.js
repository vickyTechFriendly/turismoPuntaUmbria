"use client"
import styles from './page.module.css'
import Link from "next/link"
import {Cabecera} from '../components/CarruselHome'
import {SliderHome} from '../components/SliderHome'
import {SliderFotos} from '../components/SliderFotos'
import {Mapa} from '../components/Mapa'
import { useEffect, useState } from 'react'; 
import { usePageContext } from './PageContext.js';


export default function Home() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Turismo de Punta Umbría');
        setDescription('Web turística oficial de Punta Umbría');
        setKeywords('Turismo, Punta Umbría');
    }, []);

  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_AGENDA_URL}`)
      .then(response => response.json())
      .then(data => {
        const noticiasOrdenadas = ordenarNoticiasPorFecha(data.data);
        setNoticias(noticiasOrdenadas);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
        setIsLoading(false);
      });
  }, []);

  function ordenarNoticiasPorFecha(noticias) {
    return noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }

  if (isLoading) return <div>Cargando noticias...</div>;
  if (!noticias.length) return <div>No hay noticias disponibles</div>;

  return (
    <main className={styles.main}>
      <Cabecera/> 

      <section className={`${styles.menuIconos} ${styles.menuIconos1}`}>
        <Link href="/mantenimiento"><i className="material-icons" /* style={{ color: '#EF7D2F' }} */>eco</i>Playas y Naturaleza</Link>
        <Link href="/mantenimiento"><i className="material-icons" /* style={{ color: '#E6332A' }} */>map</i>Cómo llegar</Link>
        <Link href="/mantenimiento"><i className="material-icons" /* style={{ color: '#3AAA35' }} */>info</i>Oficina Turismo</Link>
        <Link href="/mantenimiento"><i className="material-icons" /* style={{ color: '#009FE3' }} */>calendar_month</i>Agenda</Link>
      </section>

      <section className={styles.actividades}>
        <h1>Hoy en Punta</h1>
        <div className={styles.agenda}>
          {noticias.slice(0, 4).map((noticia, index) => (
            <Link href={`/noticias/${noticia.slug}`} key={index}  className={styles.evento}>
              <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticia.imagen1}`} alt={`Imagen de ${noticia.nombre_evento}`}></img>
              <div className={styles.informacion}>
                <h2>{noticia.nombre_evento.length > 50 ? noticia.nombre_evento.slice(0, 50) + '...' : noticia.nombre_evento}</h2>
                <p><i className="material-icons">calendar_month</i>{noticia.fecha_visible}</p>
                {noticia.lugar && <p className={styles.ubicacion}><i className="material-icons">location_on</i>{noticia.lugar}</p>}
              </div>
            </Link>
          ))}
        </div>
        
        <div className={styles.mas}><Link href="/agenda">{'Ver más eventos >'}</Link></div>
        <Link href="/agenda" className={styles.masMovil}><i className="material-icons">feed</i>Más eventos</Link>
      </section>

      <section className={`${styles.menuIconos} ${styles.menuIconos2}`}>
        <Link href="/mantenimiento"><i className="material-icons" /* style={{ color: '#f1a83b' }} */>water</i>Playa</Link>
        <Link href="/mantenimiento"><i className="material-icons" /* style={{ color: '#f27c39' }} */>park</i>Naturaleza</Link>
        <Link href="/mantenimiento"><i className="material-icons" /* style={{ color: '#e9502c' }} */>theater_comedy</i>Cultura</Link>
        <Link href="/gastronomia"><i className="material-icons" /* style={{ color: '#36a73c' }} */>restaurant_menu</i>Gastronomía</Link>
        <Link href="/mantenimiento"><i className="material-icons" /* style={{ color: '#199dd9' }} */>confirmation_number</i>Ocio</Link>
      </section>

      <section className={styles.imprescindibles}>
        <h1>No te lo puedes perder</h1>
        <SliderHome/> 
      </section>

      <SliderFotos/> 
      <Mapa/> 

    </main>
  )
}