"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'

export default function ComoLlegar() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Cómo Llegar - Turismo Punta Umbría');
        setDescription('Web turística oficial de Punta Umbría');
        setKeywords('Punta Umbría');
    }, []);

    return (
      <main>
        <section className={styles.cabecera}>
          <img src="/images/fondo3.jpg" alt=""></img>
          <h1>Cómo llegar.<br></br>Por Tierra, Mar y Aire</h1>
        </section>

        <section className={`${styles.contenido} ${styles.llegar}`}>
          <div className={styles.flex}>
            <img src='https://publicacionesdelsur.b-cdn.net/articulos/articulos-65016.jpg' alt=""></img>
            <div>
              <h2>Por tierra</h2>
              <p>Se encuentra situada en la Avenida Ciudad de Huelva, justo a la entrada de la localidad. Este departamento del Ayuntamiento de Punta Umbría abrió sus puertos en el año 1992, prestando desde esa fecha un servicio indispensable para todos los turístas y veraneantes que se acercan a la localidad durante todo el año.</p>
              <p>Toda información que precise sobre aspectos relacionados con estancia, transporte, ocio, así como, lugares que visitar, tanto de Punta Umbría como de la Provincia, pueden efectuarla en este departamento del Ayuntamiento.</p>
              <p>Los profesionales empleados en la Oficina de Turismo no sólo se centran en ofrecer información turística, sino que además su continua labor a lo largo de todo el año ha permitido a la localidad alcanzar distinciones de renombre como es La Bandera Ecoplaya que acreditan las excelencias medioambientales de Punta Umbría.</p>
            </div>
          </div>

          <div className={`${styles.flex} ${styles.orden}`}>
            <img src='/images/fondo3.jpg' alt=""></img>
            <div>
              <h2>Por mar</h2>
              <p>Se encuentra situada en la Avenida Ciudad de Huelva, justo a la entrada de la localidad. Este departamento del Ayuntamiento de Punta Umbría abrió sus puertos en el año 1992, prestando desde esa fecha un servicio indispensable para todos los turístas y veraneantes que se acercan a la localidad durante todo el año.</p>
              <p>Toda información que precise sobre aspectos relacionados con estancia, transporte, ocio, así como, lugares que visitar, tanto de Punta Umbría como de la Provincia, pueden efectuarla en este departamento del Ayuntamiento.</p>
              <p>Los profesionales empleados en la Oficina de Turismo no sólo se centran en ofrecer información turística, sino que además su continua labor a lo largo de todo el año ha permitido a la localidad alcanzar distinciones de renombre como es La Bandera Ecoplaya que acreditan las excelencias medioambientales de Punta Umbría.</p>
            </div>
          </div>

          <div className={styles.flex}>
            <img src='https://www.huelvainformacion.es/2020/10/23/provincia/Vista-aerea-Punta-Umbria_1513059547_127214624_1200x675.jpg' alt=""></img>
            <div>
              <h2>Por aire</h2>
              <p>Se encuentra situada en la Avenida Ciudad de Huelva, justo a la entrada de la localidad. Este departamento del Ayuntamiento de Punta Umbría abrió sus puertos en el año 1992, prestando desde esa fecha un servicio indispensable para todos los turístas y veraneantes que se acercan a la localidad durante todo el año.</p>
              <p>Toda información que precise sobre aspectos relacionados con estancia, transporte, ocio, así como, lugares que visitar, tanto de Punta Umbría como de la Provincia, pueden efectuarla en este departamento del Ayuntamiento.</p>
              <p>Los profesionales empleados en la Oficina de Turismo no sólo se centran en ofrecer información turística, sino que además su continua labor a lo largo de todo el año ha permitido a la localidad alcanzar distinciones de renombre como es La Bandera Ecoplaya que acreditan las excelencias medioambientales de Punta Umbría.</p>
            </div>
          </div>
        </section>
      </main>
      
    )
}