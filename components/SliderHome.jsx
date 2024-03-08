"use client"
/* import React, { useState } from 'react'; */
import Link from "next/link"
import styles from './SliderHome.module.css'
import { useState, useEffect, useRef } from 'react';


const noticias = [
  { 
    titulo: "Rutas y senderos", 
    enlace: "/rutas",
    imagenUrl: "https://fotografias.lasexta.com/clipping/cmsimages02/2021/07/08/A83A5B8A-258B-43A5-AF05-123299481761/98.jpg?crop=687,387,x0,y59&width=1900&height=1069&optimize=high&format=webply"
  },
  {
    titulo: "Patrimonio y vistas",
    enlace: "/patrimonio",
    imagenUrl: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/02/punta-umbria-2.jpg"
  },
  { 
    titulo: "Gastronomía", 
    enlace: "/gastronomia",
    imagenUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/14/33/e7/20190615-112343-largejpg.jpg?w=1200&h=-1&s=1"
  },
  { 
    titulo: "Turismo activo", 
    enlace: "/activo",
    imagenUrl: "https://fotografias.lasexta.com/clipping/cmsimages02/2021/07/08/A83A5B8A-258B-43A5-AF05-123299481761/98.jpg?crop=687,387,x0,y59&width=1900&height=1069&optimize=high&format=webply"
  },
  {
    titulo: "Cultura marinera",
    enlace: "/marinero",
    imagenUrl: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/02/punta-umbria-2.jpg"
  },
  { 
    titulo: "Salinas de Astur", 
    enlace: "/salinas",
    imagenUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/14/33/e7/20190615-112343-largejpg.jpg?w=1200&h=-1&s=1"
  }
];

export function SliderHome () {

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft; 
      const slideWidth = sliderRef.current.offsetWidth; 
      const newActiveSlide = Math.round(scrollLeft / slideWidth);
      setActiveSlide(newActiveSlide);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
  };

  return(
    <section className={styles.noticiasMovil}>

      <button className={styles.sliderBtnPrev} onClick={scrollLeft} style={{ zIndex: '2000' }}>&lt;</button> 
      <div className={styles.sliderContainer} ref={sliderRef}>
         
      {noticias.map((noticia, index) => (
        <Link href={noticia.enlace} className={styles.noticia}>
          <img src={noticia.imagenUrl} alt={`Imagen de ${noticia.titulo}`}></img>
          <h2>{noticia.titulo}</h2>
        </Link>
        ))}
      </div>
     <button className={styles.sliderBtnNext} onClick={scrollRight}>&gt;</button> 
      
    </section>
  )
}