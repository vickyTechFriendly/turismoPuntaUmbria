"use client"
import styles from '../pages.module.css'
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import {Busqueda} from '../../components/Busqueda'
import { usePageContext } from './../PageContext.js';

export default function Gastronomia() {
    const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Gastronomía - Turismo Punta Umbría');
        setDescription('Web oficial de Turismo de Punta Umbría');
        setKeywords('Gastronomía, Punta Umbría');
    }, []);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imagenes = [
        '/images/fondo.jpg',
        '/images/fondo2.jpg',
        '/images/fondo3.jpg',
    ];

  
    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
      
        return () => clearInterval(timer);
      }, [imagenes.length]);


    return (
        <>
        <div className={styles.encabezado}>
          <div>
            <h1>Gastronomía</h1>
            <div className={styles.apartados}>
                <Link href="/gastronomia/#zonas">Zona de restauracion</Link>
                <Link href="/gastronomia/#establecimientos">Establecimientos</Link>
            </div>
          </div>
          <div><Busqueda home={false} /></div>
          
        </div>

        <div className={styles.carousel}>
            <img src={imagenes[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
        </div>
        
        
        <main className={`${styles.main} ${styles.mainGastronomia}`}>
            <section>
                <p>La condición marinera de Punta Umbría es la protagonista principal de su gastronomía. Al ser la localidad punto de destino de veraneantes y turistas, la oferta es numerosa. Desde los chiringuitos playeros que ofrecen las populares sardinas asadas hasta reputados restaurantes con buenos artistas en sus fogones, la oferta es prácticamente imposible de describir. Destacan los fritos de pescado, como el boquerón y las coquinas y las chirlas al ajillo, aunque los puristas dicen que estos exquisitos moluscos hay que comerlos al natural, apenas abierto al vapor, la raya en pimentón, los guisos marineros de rape, corvina, lenguados de estero, pez espada y los adobos de pescado, chocos fritos, fideos con caballa y, por supuesto, los mariscos, entre los que destacan la gamba blanca, langostinos y cigalas. Se acompañan de pimentadas, ensaladas de pimientos asados, ideal para todo tipo de pescados fritos y a la plancha.</p>
                <p>La oferta gastronómica se extiende, como queda dicho, por todo el pueblo, pero especialmente en la zona de alrededor de la lonja del muelle de pescadores, en la calle Ancha, en la zona de los varaderos y a lo largo de toda la playa. Por último es de destacar la calidad de una industria artesana de helados, de origen valenciano, instalada en Punta Umbría desde hace más de medio siglo.</p>

                <h2>Tapas</h2>
                <p>Es una costumbre tan popular como divertida esta de ir de tapas. Una moda sureña que ha conquistado a muchos españoles y que anda traspasando nuestras propias fronteras. En Punta Umbría, como en toda Andalucía, ir de tapas es todo un rito que permite dar unas vueltas por el pueblo (Ruta del Pescaíto Frito) ya sea al mediodía como al atardecer o ya entrada la noche, para picar unas friturillas de pescado en un local y un picadillo en otro, un rebozado por aquí y alguna salazón por allá. Todo un mundo de sabores al alcance de una sola comida, un antecedente del menú estrecho y largo que permite saborear todas las excelencias de un restaurante o bar en una sola visita.</p>
            </section>
            <article>
                <h3>Actividades gastronómicas:</h3>

                <div>
                    <p><strong>Berdigoná</strong></p>
                    <p>Marca el inicio de los carnavales</p> 
                    <p>Enero/febrero</p>
                </div>
                <div>
                    <p><strong>Sardinada en la lonja de pescadores</strong></p>
                    <p>Domingo anterior al 16 de julio</p>
                </div>
                <div>
                    <p><strong>Feria Nacional de la Gamba, la Chirla y el Boquerón de Punta Umbría</strong></p> 
                    <p>Abril</p>
                </div>
            </article>
        </main>


        <main className={`${styles.main} ${styles.mainGastronomia} ${styles.mainGastronomiaApartados}`}>
            <section id="zonas">
                <h2>Zonas de restauración</h2>
                <div>
                    <Link href="#" className={styles.elemento}>
                        <div><img src="/images/fondo.jpg" alt="Nombre zona"></img></div>
                        <h3>Nombre zona de restauración</h3>
                    </Link>
                    <Link href="#" className={styles.elemento}>
                        <div><img src="/images/fondo.jpg" alt="Nombre zona"></img></div>
                        <h3>Nombre zona de restauración</h3>
                    </Link>
                    <Link href="#" className={styles.elemento}>
                        <div><img src="/images/fondo.jpg" alt="Nombre zona"></img></div>
                        <h3>Nombre zona de restauración</h3>
                    </Link>
                    <Link href="#" className={styles.elemento}>
                        <div><img src="/images/fondo.jpg" alt="Nombre zona"></img></div>
                        <h3>Nombre zona de restauración</h3>
                    </Link>
                </div>

                <div  className={`${styles.mas} ${styles.turquesa}`}><Link href="#">{'Ver más zonas >'} </Link></div>
                <Link href="#" className={styles.masMovil}>Más zonas</Link>
            </section>
            <section className={styles.establecimientos} id="establecimientos">
                <h2>Establecimientos</h2>
                <div>
                <Link href="#" className={styles.elemento}>
                        <div><img src="/images/fondo.jpg" alt="Nombre establecimiento"></img></div>
                        <h3 className={styles.naranja}>Nombre zona de restauración</h3>
                    </Link>
                    <Link href="#" className={styles.elemento}>
                        <div><img src="/images/fondo.jpg" alt="Nombre establecimiento"></img></div>
                        <h3 className={styles.naranja}>Nombre zona de restauración</h3>
                    </Link>
                    <Link href="#" className={styles.elemento}>
                        <div><img src="/images/fondo.jpg" alt="Nombre establecimiento"></img></div>
                        <h3 className={styles.naranja}>Nombre zona de restauración</h3>
                    </Link>
                    <Link href="#" className={styles.elemento}>
                        <div><img src="/images/fondo.jpg" alt="Nombre establecimiento"></img></div>
                        <h3 className={styles.naranja}>Nombre zona de restauración</h3>
                    </Link>
                </div>

                <div  className={`${styles.mas} ${styles.naranja}`}><Link href="#">{'Ver más establecimientos >'} </Link></div>
                <Link href="#" className={`${styles.masMovil} ${styles.naranja}`}>Más establecimientos</Link>
            </section>
        </main>
        </>
    )
}  