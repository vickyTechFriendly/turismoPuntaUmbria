"use client"
import styles from '../pages.module.css'
import Link from "next/link"
import { usePageContext } from './../PageContext.js';
import { useState, useEffect } from 'react';

export default function Agenda() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Agenda - Turismo de Punta Umbría');
        setDescription('Descubre los eventos de Punta Umbría');
        setKeywords('Agenda, Eventos, Punta Umbría');
    }, []);
  
  const [categoriasUnicas, setCategoriasUnicas] = useState(new Set());
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');
  const [filtroFecha, setFiltroFecha] = useState('todas');
  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cantidadMostrada, setCantidadMostrada] = useState(9);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_AGENDA_URL}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          const noticiasOrdenadas = ordenarNoticiasPorFecha(data.data);
          setNoticias(noticiasOrdenadas);

          const categorias = new Set();
          noticiasOrdenadas.forEach(noticia => {
            noticia.categorias?.forEach(categoria => {
              categorias.add(categoria);
            });
          });
          setCategoriasUnicas(categorias);

        } else {
          console.error('La respuesta no es un array:', data.data);
          setNoticias([]);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
        setIsLoading(false);
        setNoticias([]);
      });
  }, []);


  function ordenarNoticiasPorFecha(noticias) {
    return noticias.sort((a, b) => new Date(b.fecha_concreta) - new Date(a.fecha_concreta));
  }

  const cambiarCategoriaSeleccionada = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  const cambiarFiltroFecha = (event) => {
    setFiltroFecha(event.target.value);
  };

  const filtrarNoticiasPorFecha = (noticias) => {

    if (!Array.isArray(noticias)) {
      console.error('Se esperaba un array, se recibió:', noticias);
      return [];
    }
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    switch (filtroFecha) {
      case 'hoy':
        return noticias.filter(noticia => new Date(noticia.fecha_concreta).toDateString() === hoy.toDateString());
      case 'mañana':
        const mañana = new Date(hoy);
        mañana.setDate(mañana.getDate() + 1);
        return noticias.filter(noticia => new Date(noticia.fecha_concreta).toDateString() === mañana.toDateString());
      case 'estaSemana':
        const inicioSemana = new Date(hoy);
        inicioSemana.setDate(hoy.getDate() - hoy.getDay()); // El día de la semana en 0 es domingo
        const finSemana = new Date(inicioSemana);
        finSemana.setDate(inicioSemana.getDate() + 6); // Suma 6 días para llegar al sábado
  
        return noticias.filter(noticia => {
          const fechaNoticia = new Date(noticia.fecha_concreta);
          return fechaNoticia >= inicioSemana && fechaNoticia <= finSemana;
        });
      case 'esteMes':
        const inicioMes = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
      const finMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0); // El día 0 del siguiente mes es el último día del mes actual

      return noticias.filter(noticia => {
        const fechaNoticia = new Date(noticia.fecha_concreta);
        return fechaNoticia >= inicioMes && fechaNoticia <= finMes;
      });
      default:
        return noticias;
    }
  };

  const noticiasFiltradas = filtrarNoticiasPorFecha(noticias)
  .filter(noticia => 
    categoriaSeleccionada === 'todas' || noticia.categorias?.includes(categoriaSeleccionada))
  .filter(filtrarNoticiasPorFecha);


  useEffect(() => {
    const cargarMasNoticias = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        setCantidadMostrada(cantidadMostrada => cantidadMostrada + 9);
      }
    };

    window.addEventListener('scroll', cargarMasNoticias);
    return () => window.removeEventListener('scroll', cargarMasNoticias);
  }, []);

  if (isLoading) return <div>Cargando noticias...</div>;
  /* if (!noticiasFiltradas.length) return <div>No hay noticias disponibles</div>; */

    return (
      <main>
        <section className={`${styles.cabecera} ${styles.agenda}`}>
          <img src="https://images.unsplash.com/photo-1531686264889-56fdcabd163f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>EVENTOS TODO EL AÑO</h1>
          <div className={styles.categorias}>
            <p className={styles.sugerencia}>Busca un evento por la categoría y la fecha que más te interese</p>
            <div className={styles.desplegables}>
              <select onChange={cambiarCategoriaSeleccionada} value={categoriaSeleccionada}>
                <option value="todas" style={{ textTransform: 'capitalize' }}>Todas las categorías</option>
                {Array.from(categoriasUnicas).map((categoria, index) => (
                  <option key={index} value={categoria}>{categoria}</option>
                ))}
              </select>
              <select onChange={cambiarFiltroFecha} value={filtroFecha}>
                <option value="todas">Todas las Fechas</option>
                <option value="hoy">Hoy</option>
                <option value="mañana">Mañana</option>
                <option value="estaSemana">Esta Semana</option>
                <option value="esteMes">Este Mes</option>
              </select>
            </div>
          </div>
        </section>

        <section className={styles.contenido}>
            <div className={styles.listadoEventos}>
              {noticiasFiltradas && noticiasFiltradas.slice(0, cantidadMostrada).map((noticia, index) => (
                <Link href={`/agenda/${noticia.slug}`} key={index} className={styles.evento}>
                  <div className={styles.imagenEvento}>
                    <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticia.imagen1}`} alt={`Imagen de ${noticia.nombre_evento}`}></img>
                  </div>
                  <h2>{noticia.nombre_evento}</h2>
                  <div className={styles.datos}>
                  <div  className={styles.categoriasEvento}>
                    {noticia.categorias && noticia.categorias.map((categoria, catIndex) => (
                      <p key={catIndex} className={styles.categoria}>{categoria}</p>
                    ))}
                    </div>
                    <p className={styles.fecha}><i className="material-icons">calendar_month</i>{noticia.fecha_visible}</p>
                    {noticia.lugar && <p className={styles.ubicacion}><i className="material-icons">location_on</i>{noticia.lugar}</p>}
                  </div>
                </Link>
              ))}
            </div>
        </section>
      </main>
    )
}