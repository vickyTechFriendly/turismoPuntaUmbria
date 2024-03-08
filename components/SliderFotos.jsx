"use client"
import styles from './SliderFotos.module.css';
import { useEffect, useState, useRef } from 'react';


export function SliderFotos () {

    const images = [
        '/images/fondo.jpg',
        '/images/fondo2.jpg',
        '/images/fondo3.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const intervalRef = useRef();
  
    useEffect(() => {
      if (isPlaying) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000); 
      } else {
        clearInterval(intervalRef.current);
      }
  
      return () => {
        clearInterval(intervalRef.current);
      };
    }, [isPlaying]);
  
    const toggleAutoPlay = () => {
      setIsPlaying(!isPlaying);
    };
  

    return(
        <div className={styles.carousel}>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          <button onClick={toggleAutoPlay}>
            <i className={`material-icons ${isPlaying ? 'pause' : 'play_arrow'}`}>
              {isPlaying ? 'pause' : 'play_arrow'}
            </i>
          </button>
        </div>
    )
}