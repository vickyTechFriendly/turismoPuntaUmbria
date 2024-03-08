"use client"
import Link from "next/link";
import styles from './CarruselHome.module.css';
import { useState, useEffect } from 'react';
import {Busqueda} from './../components/Busqueda'


export function Cabecera () {

const imagenes = [
    {url:'https://fotografias.lasexta.com/clipping/cmsimages02/2021/07/08/A83A5B8A-258B-43A5-AF05-123299481761/98.jpg?crop=687,387,x0,y59&width=1900&height=1069&optimize=high&format=webply', titulo:'Visita nuestras', enlace:'#', boton: 'Playas'},
    {url:'https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/02/punta-umbria-2.jpg', titulo:'Vive nuestra', enlace:'#', boton: 'Cultura'},
    {url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/14/33/e7/20190615-112343-largejpg.jpg?w=1200&h=-1&s=1', titulo:'Disfruta nuestras', enlace:'#', boton: 'Fiestas'}
];

const [imagenActual, setImagenActual] = useState(0);
const [sinTransicion, setSinTransicion] = useState(false); 

const cambiarImagenAutomaticamente = () => {
    const nuevaImagen = (imagenActual + 1) % imagenes.length;
    setSinTransicion(true);
    setImagenActual(nuevaImagen);
};

useEffect(() => {
    const interval = setInterval(cambiarImagenAutomaticamente, 3000);
    return () => clearInterval(interval); 
}, [imagenActual]);

useEffect(() => {
    const timeout = setTimeout(() => {
      setSinTransicion(false);
    }, 100);
    return () => clearTimeout(timeout);
}, [imagenActual]);


/* const irAnterior = () => {
    if (imagenActual === 0) {
        setSinTransicion(true);
        setImagenActual(imagenes.length - 1);

        // Restablecer la transición después de un re-render
        setTimeout(() => setSinTransicion(false), 0);
    } else {
        setImagenActual(imagenActual - 1);
    }
}

const irSiguiente = () => {
    if (imagenActual === imagenes.length - 1) {
        setSinTransicion(true);
        setImagenActual(0);

        // Restablecer la transición después de un re-render
        setTimeout(() => setSinTransicion(false), 0);
    } else {
        setImagenActual(imagenActual + 1);
    }
} */


    return(
        <>
        <div className={styles.relative}></div>
        <div className={styles.carruselContainer}>
            <div className={styles.carruselImagenes} style={{transform: `translateX(-${imagenActual * 100}%)`, transition: sinTransicion ? 'none' : 'transform 0.5s ease-in-out' }}>
                {imagenes.map((item, index) => (
                    <div className={`${styles.imagen} ${styles.imagenConFiltro}`} key={index} style={{ backgroundImage: `url(${item.url})`}}>
                        <div className={styles.contenedorTexto}>
                            <p className={styles.tituloCarrusel}>{item.titulo}</p><br></br>
                            <Link href={item.enlace}>{item.boton}</Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.buscador}><Busqueda home={true}/></div>

            <img src="/images/oleaje.png" className={styles.oleaje}></img>
         
            {/* <button className={styles.botonIzquierdo} onClick={irAnterior}>&lt;</button>
            <button className={styles.botonDerecho} onClick={irSiguiente}>&gt;</button> */}

            <div className={styles.navegacion}>
                {imagenes.map((_, index) => (
                    <span key={index} className={imagenActual === index ? styles.puntoActivo : styles.punto} onClick={() => setImagenActual(index)}></span>
                ))}
            </div>
        </div>
        </>
    )
}