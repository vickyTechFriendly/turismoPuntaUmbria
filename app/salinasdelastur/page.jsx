"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import Link from "next/link"

export default function Salinas() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Salinas del Astur - Turismo Punta Umbría');
        setDescription('Web turística oficial de Punta Umbría');
        setKeywords('Punta Umbría, Salinas del Astur');
    }, []);

    return (
      <main>
        <section className={styles.cabecera}>
          <img src="https://salinasdelastur.com.es/wp-content/uploads/2023/09/cropped-Salinas-Astur-Panoramica-1500.jpg" alt=""></img>
          <h1>Salinas del Astur</h1>
        </section>

        <section  className={`${styles.contenido} ${styles.llegar}`}>

          <p style={{marginBottom: 80 }} className={styles.presentacion}>Salinas del Astur son unos esteros dedicados a la producción acuícola de doradas, lubinas, lenguados y corvinas, en lo que antiguamente eran cristalizadores de sal. La acuicultura en esteros se practicaba ya en las ancestrales salinas como complemento a la sal, siendo muy apreciados los pescados de esteros por su excelente calidad. Hoy día en Salinas del Astur la producción de sal ha dado paso a la producción exclusiva de pescado en esteros y al turismo acuícola y medioambiental de su entorno natural.</p>

          <div className={styles.flex}>
            <img src='https://salinasdelastur.com.es/wp-content/uploads/2023/09/Salinas-del-Astur-dorada-1024-pescado-de-estero-1.jpg' alt=""></img>
            <div>
              <h2>SALINAS DEL ASTUR : Quiénes somos</h2>
              <p>Salinas del Astur es una entidad dependiente del Ayuntamiento de Punta Umbría, que gestiona el centro acuícola Salinas del Astur, que es de <strong>uso público</strong> y en el que se llevan a cabo dos actividades principales:</p>
              <ol>
                <li>Producción acuícola de dorada, lubinas y lenguados en los esteros de las antiguas salinas del Astur, dentro del Paraje Natural Marismas del Odiel.</li>
                <li>Turismo acuícola y medioambiental, destacando la pesca segura recreativa, talleres de formación, observación y fotografía de aves y rutas de naturaleza. Se pueden hacer visitas concertadas.</li>
              </ol>
            </div>
          </div>

          <div className={`${styles.flex} ${styles.orden}`}>
            <img src='https://salinasdelastur.com.es/wp-content/uploads/2023/09/Salinas-del-Astur-aves-1024x394-copy.jpg' alt="" className={styles.masAncho}></img>
            <div>
              <h2>Entorno natural</h2>
              <p>Salinas del Astur se ubica en el término municipal de Punta Umbría, dentro del Paraje Natural Marismas del Odiel, que constituye uno de los ecosistemas más productivos del litoral Suratlántico, en el que destaca una rica ictiofauna y variada avifauna. A su carácter de zona obligada de paso para millares de aves en su ruta migratoria procedente de toda Europa, se une la importancia como zona de cría para numerosas especies entre las que destacan las espátulas, águilas pescadoras, flamencos y garzas. Estas características extraordinarias del Paraje Natural Marismas del Odiel han propiciado su declaración como Reserva de la Biosfera por la UNESCO, su reconocimiento como Zona Especial de Protección para las Aves (ZEPA) por la Unión Europea e inclusión en el Convenio Internacional sobre Humedales de Importancia Internacional (RAMSAR), así como en la red NATURA 2000.</p>
            </div>
          </div>

          <div className={styles.flex}>
            <img src='https://salinasdelastur.com.es/wp-content/uploads/2023/09/Cristalizador-sal-Astur-1024x1024.jpg' alt=""></img>
            <div>
              <h2>Breve historia</h2>
              <p>La construcción de las salinas del Astur tuvo lugar en los años 20 del pasado siglo, llevada a cabo por Antonio Sánchez Allende-Valledor, concesionario constructor de procedencia asturiana. Originariamente la concesión fue dada en 1905 para “desecar y sanear estas marismas para dedicarlas al cultivo y ganadería”, sin embargo por ser terreno pobre para la agricultura y siendo la sal el principal conservante alimenticio de aquellos años, se transformó su uso en salina, que estuvo en funcionamiento hasta la década de los 70, cuando fue abandonada por falta de rentabilidad. En 2001 se inició la acuicultura en tres de las antiguas naves o esteros de la salina, con el objetivo de producir doradas, lubinas y lenguados. Hoy día en Salinas del Astur sigue dedicándose a la acuitultura en esteros y al turismo acuícola y medioambiental. En un futuro próximo será dedicada toda la extensión de la antigua salina a granja marina, así como a un centro de formación e interpretación de la naturaleza</p>
            </div>
          </div>

          <div className={styles.flex}>
            <div>
              <h2>Cómo llegar</h2>
              <p style={{ marginBottom: '10px' }}>SOCIEDAD MUNICIPAL SALINAS DEL ASTUR S.L.U.</p>
              <div className={styles.iconosContacto}>
                  <p style={{ display: 'flex', alignItems: 'center'}}><i className="material-icons" style={{ marginRight: '5px' }}>location_on</i>Plaza de la constitución nº1, 21100 Punta Umbría - HUELVA</p>
                  <p style={{ display: 'flex', alignItems: 'center' }}><i className="material-icons" style={{ marginRight: '5px' }}>phone</i>959 495 145</p>
                  <p style={{ display: 'flex', alignItems: 'center' }}><i className="material-icons" style={{ marginRight: '5px' }}>mail</i>salinasdelastur@puntaumbría.es</p>
              </div>
              <p><strong>Coordenadas geográficas:</strong><br>
              </br>37.2052°N  6.9923°W</p>
            </div>
            <img src='https://salinasdelastur.com.es/wp-content/uploads/2023/09/Localizacion-Salinas-del-Astur.jpg' alt=""></img>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12711.170621732655!2d-6.9924441!3d37.205154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11d16eee121091%3A0x91680343e68cd6f3!2sSalinas%20Del%20Astur!5e0!3m2!1ses-419!2ses!4v1703142546951!5m2!1ses-419!2ses" className={styles.mapa}></iframe>
          </div>
        </section>
      </main> 
    )
} 