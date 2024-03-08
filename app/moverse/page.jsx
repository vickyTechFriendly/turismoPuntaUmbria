"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import Link from "next/link"

export default function Moverse() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Cómo moverse - Turismo Punta Umbría');
        setDescription('Web turística oficial de Punta Umbría');
        setKeywords('Punta Umbría, transporte publico');
    }, []);

    return (
      <main>

        <section className={styles.cabecera}>
          <img src="https://puntabus.es/wp-content/uploads/2016/11/slider10.jpg" alt=""></img>
          <h1>Cómo moverse</h1>
        </section>

        <section  className={`${styles.contenido} ${styles.llegar}`}>

          <p className={styles.presentacion}>Los autobuses son medios de transportes cómodos para moverse tanto por dentro como por los alrededores de la ciudad. Punta Umbría cuenta con autobuses que conectan todos los rincones de la ciudad con la playa para que no pierdas detalle. Aquí te explicamos las alternativas que tienes a tu disposición y te informamos sobre todos los horarios, paradas y teléfonos de las diferentes compañías.</p>
          <p style={{marginBottom: 80 }} className={styles.presentacion}>Otras opciones muy recomendadas para conocer la ciudad son la bici, el coche, el taxi y, por supuesto, recorrer la ciudad a pie.</p>

          <div className={styles.flex}>
            <img src='https://publicacionesdelsur.b-cdn.net/articulos/articulos-65016.jpg' alt=""></img>
            <div>
              <h2>Moverse en bici</h2>
              <h3>CONOCE LA CIUDAD DE UNA MANERA MÁS ECOLÓGICA Y SOSTENIBLE</h3>
              <p>Se encuentra situada en la Avenida Ciudad de Huelva, justo a la entrada de la localidad. Este departamento del Ayuntamiento de Punta Umbría abrió sus puertos en el año 1992, prestando desde esa fecha un servicio indispensable para todos los turístas y veraneantes que se acercan a la localidad durante todo el año.</p>
              <p>Toda información que precise sobre aspectos relacionados con estancia, transporte, ocio, así como, lugares que visitar, tanto de Punta Umbría como de la Provincia, pueden efectuarla en este departamento del Ayuntamiento.</p>
              <p>Los profesionales empleados en la Oficina de Turismo no sólo se centran en ofrecer información turística, sino que además su continua labor a lo largo de todo el año ha permitido a la localidad alcanzar distinciones de renombre como es La Bandera Ecoplaya que acreditan las excelencias medioambientales de Punta Umbría.</p>
            </div>
          </div>

          <div className={`${styles.flex} ${styles.orden}`}>
            <img src='/images/fondo3.jpg' alt=""></img>
            <div>
              <h2>Moverse en bus</h2>
              <h3>ACÉRCATE A LA PLAYA O A LA CIUDAD EN TRANSPORTE PÚBLICO</h3>
              <p>Se encuentra situada en la Avenida Ciudad de Huelva, justo a la entrada de la localidad. Este departamento del Ayuntamiento de Punta Umbría abrió sus puertos en el año 1992, prestando desde esa fecha un servicio indispensable para todos los turístas y veraneantes que se acercan a la localidad durante todo el año.</p>
              <p>Toda información que precise sobre aspectos relacionados con estancia, transporte, ocio, así como, lugares que visitar, tanto de Punta Umbría como de la Provincia, pueden efectuarla en este departamento del Ayuntamiento.</p>
              <p>Los profesionales empleados en la Oficina de Turismo no sólo se centran en ofrecer información turística, sino que además su continua labor a lo largo de todo el año ha permitido a la localidad alcanzar distinciones de renombre como es La Bandera Ecoplaya que acreditan las excelencias medioambientales de Punta Umbría.</p>
            </div>
          </div>

          <div className={styles.flex}>
            <img src='https://www.huelvainformacion.es/2020/10/23/provincia/Vista-aerea-Punta-Umbria_1513059547_127214624_1200x675.jpg' alt=""></img>
            <div>
              <h2>Moverse a pie</h2>
              <h3>UN PASEO POR PUNTA UMBRÍA</h3>
              <p>Por el tamaño de la ciudad, su orografía sin grandes desniveles y su excelente clima, una de las mejores maneras de descubrir Punta Umbría es paseando por sus calles, áreas peatonales y cambios rurales.</p>
              <Link href="#"> Descubre las rutas turísticas y sendas de Punta Umbría.</Link>
            </div>
          </div>

          <div className={`${styles.flex} ${styles.orden}`}>
            <img src='/images/fondo3.jpg' alt=""></img>
            <div>
              <h2>Moverse en coche</h2>
              {/* <h3>APARCAR EN GANDIA</h3> */}
              <p>Si decides moverte en coche por nuestra ciudad, debes saber que el centro histórico es peatonal.</p>
              <p>Consulta el listado y mapa de <Link href="#">aparcamientos públicos.</Link></p>
              <p>Ten en cuenta que en ciertos horarios y zonas céntricas el aparcamiento en la calle está limitado y regulado. Recuerda: ¡siempre es preferible utilizar el transporte público!</p>
            </div>
          </div>

          <div className={styles.flex}>
            <img src='https://www.huelvainformacion.es/2020/10/23/provincia/Vista-aerea-Punta-Umbria_1513059547_127214624_1200x675.jpg' alt=""></img>
            <div>
              <h2>Moverse en taxi</h2>
              <h3>UN TAXI DÓNDE Y CUÁNDO QUIERAS</h3>
              <p>Los Taxis son un medio para desplazarse rápidamente por la ciudad. Cubren todos los rincones de la ciudad y sus alrededores, llegando donde otros medios como los autobuses no alcanzan.</p>
            </div>
          </div>
        </section>
      </main>
    )
}