"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import Link from "next/link"

export default function Contacto() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Contacto - Turismo Punta Umbría');
        setDescription('Web turística oficial de Punta Umbría');
        setKeywords('Punta Umbría');
    }, []);

    return (
      <main>
        <section className={styles.cabecera}>
          <img src="http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/images/galeria_oficina-turismo/oficina_turismo_exterior_0021302250593318.jpg" alt=""/>
          <h1>Contacto</h1>
        </section>

        <section  className={styles.contenido}>
          <div className={styles.flex}>
            <img src='http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/images/galeria_oficina-turismo/oficina_turismo_exterior_0021302250593318.jpg' alt="Oficina de turismo"></img>
            <div>
              <h2>La oficina de Turismo de Punta Umbría</h2>
              <p>Se encuentra situada en la Avenida Ciudad de Huelva, justo a la entrada de la localidad. Este departamento del Ayuntamiento de Punta Umbría abrió sus puertos en el año 1992, prestando desde esa fecha un servicio indispensable para todos los turístas y veraneantes que se acercan a la localidad durante todo el año.</p>
              <p>Toda información que precise sobre aspectos relacionados con estancia, transporte, ocio, así como, lugares que visitar, tanto de Punta Umbría como de la Provincia, pueden efectuarla en este departamento del Ayuntamiento.</p>
              <p>Los profesionales empleados en la Oficina de Turismo no sólo se centran en ofrecer información turística, sino que además su continua labor a lo largo de todo el año ha permitido a la localidad alcanzar distinciones de renombre como es La Bandera Ecoplaya que acreditan las excelencias medioambientales de Punta Umbría.</p>
            </div>
          </div>

          <div className={styles.flex}>
            <div>
              <h3>Horario Oficina de Turismo a partir del 04 de Septiembre</h3>
              <div className={styles.flexMovil}>
                <div>
                  <p><strong>Lunes a Viernes</strong><br>
                  </br>Mañanas 10:00-14.00<br>
                  </br>Tardes 16:00-18:00</p>
                  
                  <p><strong>Sábados</strong><br>
                  </br>Mañanas 10:00-13:00</p>
                </div>
                <div className={styles.iconosContacto}>
                  <p style={{ display: 'flex', alignItems: 'center'}}><i className="material-icons" style={{ marginRight: '5px' }}>location_on</i>Avd Ciudad de Huelva.</p>
                  <p style={{ display: 'flex', alignItems: 'center' }}><i className="material-icons" style={{ marginRight: '5px' }}>phone</i>959 495160</p>
                  <Link href="mailto:turismo@puntaumbria.es" style={{ display: 'flex', alignItems: 'center' }}><i className="material-icons"  style={{ marginRight: '5px' }}>mail</i>turismo@puntaumbria.es</Link>
                </div>
              </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12715.289536580365!2d-6.9677407!3d37.1806918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11d12b0a841dab%3A0xd34f0e8cc58d1a49!2sOficina%20de%20Turismo%20de%20Punta%20Umbr%C3%ADa!5e0!3m2!1ses-419!2ses!4v1703076621680!5m2!1ses-419!2ses"  className={styles.mapa}></iframe>
          </div>
        </section>
      </main>
      
    )
} 