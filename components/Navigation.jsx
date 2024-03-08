"use client"
import Link from "next/link"
import styles from './Navigation.module.css'
import {Busqueda} from '../components/Busqueda'
import { useEffect, useState } from 'react'; 

export function Navigation () {

    /* MENU HAMBURGUESA */
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
const [isInnerSubMenuOpen, setIsInnerSubMenuOpen] = useState({});

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};

const handleParentClick = (menuName, e) => {
    e.preventDefault();
    e.stopPropagation(); 
    setIsSubMenuOpen(prevState => ({
      ...prevState,
      [menuName]: !prevState[menuName]
    }));
};

const handleInnerParentClick = (subMenuName, e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsInnerSubMenuOpen(prevState => ({
        ...prevState,
        [subMenuName]: !prevState[subMenuName]
    }));
};


    /* NOTICIAS EN SUBMENU */
const now = new Date();
  const dayNumber = String(now.getDate()).padStart(2, '0');
  const dayName = now.toLocaleDateString('es', { weekday: 'long' }); 
  const monthName = now.toLocaleDateString('es', { month: 'long' }); 

  function formatearFecha(fechaString) {
    const opciones = { month: 'long', day: 'numeric' };
    return new Date(fechaString).toLocaleDateString('es-ES', opciones);
  }

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
    return noticias.sort((a, b) => new Date(b.fecha_concreta) - new Date(a.fecha_concreta));
  }


      /* METEOROLOGÍA */
const [tiempo, setTiempo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Punta Umbría&appid=6083d072cd0e5e27dd2af63e993b86f0&units=metric&lang=es');
            const data = await response.json();
            setTiempo(data);
        };

        fetchData();
    }, []);

const [weatherData, setWeatherData] = useState([]);
        
        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Punta%20Umbr%C3%ADa&appid=6083d072cd0e5e27dd2af63e993b86f0&units=metric&lang=es');
                const data = await response.json();
                processWeatherData(data);
            };
    
            fetchData();
        }, []);
    
        const processWeatherData = (data) => {
            const dailyData = {};
    
            data.list.forEach(item => {
                const date = new Date(item.dt_txt);
                const formattedDate = date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric' });
                if (!dailyData[formattedDate]) {
                    dailyData[formattedDate] = {
                        temps: [],
                        icon: item.weather[0].icon
                    };
                }
                dailyData[formattedDate].temps.push(item.main.temp);
            });
            // Calcular max y min para cada día
            const processedData = Object.keys(dailyData).slice(0, 7).map(date => {
                return {
                    date,
                    tempMax: Math.round(Math.min(...dailyData[date].temps)),
                    tempMin: Math.round(Math.max(...dailyData[date].temps)),
                    icon: dailyData[date].icon
                };
            });
    
            setWeatherData(processedData);
        };


    return(

        <header className={styles.header}>

            <a href="/"><img src="/images/logo.png" className={styles.logo} alt="Inicio"></img></a>

            {/* menu Escritorio */}
            <nav>
                <ul className={styles.navigationEscritorio}>
                    <li className={styles.paddingMenuEscritorio}>
                        <Link href="#" className={styles.MenuPrincipal}>Vive<i className="material-icons">expand_more</i></Link>
                        <div className={styles.submenuEscritorio}>
                        <ul><Link href="#">Playas y Entorno Natural</Link>
                            <li className={styles.linea}><Link href="/alcalde">Ubicaciones</Link></li>
                            <li><Link href="/corporacion">Equipamientos</Link></li>
                            <li><Link href="/mantenimiento">Bandera Azul</Link></li>
                            <li><Link href="/mantenimiento">Calidad</Link></li>
                            <li><Link href="/contacto">Parajes</Link></li>
                            <li><Link href="/corporacion">Rutas y Senderos</Link></li>
                            <li><Link href="/mantenimiento">Flora y fauna</Link></li>
                            <li><Link href="/mantenimiento">Avistamiento de Aves</Link></li>
                            <li><Link href="/salinasdelastur">Salinas del Astur</Link></li>
                        </ul>
                        <ul><Link href="/cultura">Cultura</Link>
                            <li className={styles.linea}><Link href="/alcalde">Historia</Link></li>
                            <li><Link href="/corporacion">Punta Umbria Marinera</Link></li>
                            <li><Link href="/mantenimiento">Patrimonio y visitas</Link></li>
                            <li><Link href="/mantenimiento">Costumbres y tradiciones</Link></li>
                            <li><Link href="/contacto">Teatro del Mar</Link></li>
                            <li><Link href="/corporacion">Salas de Exposiciones</Link></li>
                            <li><Link href="/mantenimiento">Biblioteca</Link></li>
                        </ul>
                        <ul><Link href="/gastronomia">Gastronomía</Link>Deporte y Turismo Activo
                            <li className={styles.linea}><Link href="/alcalde">Instalaciones</Link></li>
                            <li><Link href="/corporacion">Destino de concentraciones y entrenamientos</Link></li>
                            <li><Link href="/mantenimiento">Turismo activo</Link></li>
                            <li><Link href="/mantenimiento">Puertos Deportivos</Link></li>
                            <li><Link href="/contacto">Cicloturismo</Link></li>
                            <li><Link href="/corporacion">Eventos deportivos</Link></li>
                        </ul>
                        <div>
                        <ul><Link href="/gastronomia">Gastronomía</Link>
                            <li className={styles.linea}><Link href="/alcalde">Zonas de Restauración</Link></li>
                            <li><Link href="/corporacion">Establecimientos</Link></li>
                        </ul>
                        <ul><Link href="/ocio">Ocio</Link>
                            <li className={styles.linea}><Link href="/alcalde">Zonas de Ocio</Link></li>
                            <li><Link href="/corporacion">Establecimientos</Link></li>
                        </ul>
                        </div>
                        </div>
                    </li>
                    <li className={styles.paddingMenuEscritorio}>
                        <Link href="#" className={styles.MenuPrincipal}>Planifica<i className="material-icons">expand_more</i></Link>
                        <div className={styles.submenuEscritorio}>
                        <ul><Link href="/llegar">Cómo llegar</Link>
                            <li className={styles.linea}><Link href="/comollegar">Por Tierra, Mar y Aire</Link></li>
                            <li><Link href="/mantenimiento">Alrededores</Link></li>
                            <li><Link href="/mantenimiento">Descubre Huelva desde Punta</Link></li>
                        </ul>
                        <ul><Link href="/movilidad">Movilidad</Link>
                            <li className={styles.linea}><Link href="/mantenimiento">Información de interés</Link></li>
                            <li><Link href="/moverse">Cómo moverse</Link></li>
                            <li><Link href="/mantenimiento">La Canoa</Link></li>
                            <li><Link href="/mantenimiento">Dónde aparcar</Link></li>
                        </ul>
                        <div className={styles.flexColumn}>
                        <Link href="/mantenimiento" className={styles.tituloSubmenu}>Alojamientos</Link>
                        <Link href="/mantenimiento" className={styles.tituloSubmenu}>Convenciones y concentraciones</Link>
                        <Link href="/mantenimiento" className={styles.tituloSubmenu}>Compras</Link>
                        <Link href="/mantenimiento" className={styles.tituloSubmenu}>Salud y Belleza</Link>
                        <Link href="/mantenimiento" className={styles.tituloSubmenu}>Viaja con mascotas</Link>
                        </div>
                        </div>
                    </li> 
                    <li className={styles.paddingMenuEscritorio}>
                        <Link href="#" className={styles.MenuPrincipal}>Oficina de turismo<i className="material-icons">expand_more</i></Link>
                        <div className={styles.submenuEscritorio} style={{gap: 50 }}>
                        <div className={styles.flexColumn}>
                        <ul><Link href="#">Donde estamos</Link>
                            <li className={styles.linea}><Link href="/contacto">Contacta</Link></li>
                            <Link href="#" style={{ marginLeft: '10px' }}><img src="/images/whatsapp negro.png" width={20} height={20}></img></Link>
                        </ul>
                        <ul><Link href="#">Enlaces</Link>
                            <li className={styles.linea}><Link href="/mantenimiento" target="_blank">Ayto. Punta Umbría</Link></li>
                            <li><Link href="https://ondapuntaradio.com/" target="_blank">Onda Punta Radio - <br></br>Punta Umbría Noticias</Link></li>
                            <li><Link href="https://umbria.sedelectronica.es/info.0" target="_blank">Sede Electrónica</Link></li>
                        </ul>  
                        <ul><Link href="#">Descarga</Link>
                            <li className={styles.linea}><Link href="/mantenimiento">Planos, guías y audioguías</Link></li>
                            <li><Link href="/mantenimiento">Folletos</Link></li>
                        </ul>
                        </div>
                        <div className={styles.flexColumn}>
                        <ul><Link href="#">Servicios (edificios) Municipales</Link>
                            <li className={styles.linea}><Link href="/mantenimiento">Servicio Atendión a la Ciudadanía</Link></li>
                            <li><Link href="/mantenimiento">Policia Local</Link></li>
                            <li><Link href="/mantenimiento">Ayuntamiento</Link></li>
                            <li><Link href="/mantenimiento">Edificio Galeón</Link></li>
                            <li><Link href="/mantenimiento">Servicios Técnicos - Urbanismo</Link></li>
                        </ul>
                        <Link href="/mantenimiento" className={`${styles.tituloSubmenu} ${styles.turquesa}`}>Galería</Link>
                        <div className={styles.iconos}>
                            <Link href="#"><i className="material-icons">image</i></Link>
                            <Link href="#"><i className="material-icons">videocam</i></Link>
                            <Link href="#"><img src="/images/youtube_negro.png" width={20} height={17}></img></Link>
                        </div>
                        </div>
                        <ul><Link href="#">Otros servicios</Link>
                            <li className={styles.linea}><Link href="/mantenimiento">Centro de Salud</Link></li>
                            <li><Link href="/mantenimiento">Emergencias 112</Link></li>
                            <li><Link href="/mantenimiento">Farmacias de Guardia</Link></li>
                            <li><Link href="/mantenimiento">Servicios Religiosos</Link></li>
                            <li><Link href="/mantenimiento">Mercadillos</Link></li>
                            <li><Link href="/mantenimiento">Taxi</Link></li>
                        </ul>
                        <div className={styles.flexColumn}> 
                        <Link href="/mantenimiento" className={styles.tituloSubmenu}>Rutas interactivas 360º</Link>
                        <Link href="/mantenimiento" className={styles.tituloSubmenu}>Puntos de Interés</Link>
                        <Link href="/mantenimiento" className={styles.tituloSubmenu}>WiFi Pública WiFi4EU</Link>
                        <Link href="/mantenimiento" className={styles.tituloSubmenu}>Área Profesional <br></br><span style={{ textTransform: 'initial', fontWeight: 500}}>(solicitud y alta de establecimientos)</span></Link>
                        </div> 
                        </div>
                    </li> 
                    <li className={styles.paddingMenuEscritorio}>
                        <Link href="#" className={styles.MenuPrincipal}>Hoy en Punta<i className="material-icons">expand_more</i></Link>
                        <div className={styles.submenuEscritorio}>
                        <div className={`${styles.flexColumn} ${styles.eventos}`}>
                        <p className={styles.principalesEventos}>Principales eventos</p>
                            <div className={styles.carrusel}>
                            {noticias.slice(0, 4).map((noticia, index) => (
                                <Link href={`/agenda/${noticia.slug}`} key={index}  className={styles.evento}>
                                <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticia.imagen1}`} alt={`Imagen de ${noticia.nombre_evento}`}></img>
                                <div className={styles.informacion}>
                                    <h2>{noticia.nombre_evento.length > 20 ? noticia.nombre_evento.slice(0, 20) + '...' : noticia.nombre_evento}</h2>
                                    <p><i className="material-icons">calendar_month</i>{noticia.fecha_visible}</p>
                                </div>
                                </Link>
                            ))}
                            </div>
                        <Link href="/agenda" className={styles.agenda}>Agenda</Link>
                        </div>
                        <ul className={styles.tematica} style={{ marginTop: '28px' }}>Eventos por temática
                            <li className={styles.linea}><Link href="/mantenimiento">Culturales</Link></li>
                            <li><Link href="/mantenimiento">Deportivos</Link></li>
                        </ul>
                        </div>
                    </li> 
                    <li className={styles.paddingMenuEscritorio}>
                    {tiempo && ( 
                        <Link href="#" className={`${styles.MenuPrincipal} ${styles.meteorologia}`}> <img src={`http://openweathermap.org/img/w/${tiempo.list[0].weather[0].icon}.png`} alt="Weather icon"></img>{Math.round(tiempo.list[0].main.temp)} °C<i className="material-icons">expand_more</i></Link>
                    )} 
                     <div className={styles.submenuEscritorio} style={{ flexDirection: 'column' }}>
                        <div className={styles.prevision}>
                        {weatherData.map((day, index) => (
                        <div key={index} className={styles.cadaPrevision}>
                            <p className={styles.fecha}>{day.date}</p>
                            <img src={`http://openweathermap.org/img/w/${day.icon}.png`} alt="Weather icon" />
                            <p>{day.tempMax}°C / {day.tempMin}°C</p>
                        </div>
                        ))} 
                        </div>
                        <div className={styles.botonesClima}>
                        <Link href="#">Clima de Punta Umbría</Link>
                        <Link href="#">Estado del mar</Link>
                        <Link href="#">Tabla de mareas</Link>
                        </div>
                     </div>
                    </li>    
                </ul>
            </nav> 
            
            <div className={styles.redes}> 
                <a href="https://twitter.com/AytoPuntaUmbria?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" ><img src="/images/x.png" height={15}></img></a>
                <a href="https://www.facebook.com/people/Ayuntamiento-De-Punta-Umbr%C3%ADa/100072512790629/" target="_blank"><img src="/images/facebook negro.png" height={16}></img></a>
                <a href="https://www.youtube.com/@ayuntamientodepuntaumbria4887" target="_blank"><img src="/images/youtube_negro.png" width={18}></img></a>
            </div> 


            {/* menú movil */}
            <div className={styles.menuIcon}  onClick={toggleMenu}><i className="material-icons">{isMenuOpen ? 'close' : 'menu'} {/* Cambia el icono basándote en isMenuOpen */}</i>
            <nav className={`${styles.navigation} ${isMenuOpen ? styles.menuOpenMargin : ''}`}>
                <ul className={` ${isMenuOpen ? styles.menuActive : styles.menuNoActive}`}>
                    <li className={styles.paddingMenu}>
                        <Link className={`${styles.opcionPadre}`} href="#" onClick={(e) => handleParentClick('vive', e)}>Vive<i className="material-icons" style={{transform: isSubMenuOpen['vive'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                        <ul className={`${styles.submenu}  ${isSubMenuOpen['vive'] ? styles.submenuActive : ''}`}>
                            <li className={styles.paddingMenu}>
                            <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('playas', e)}>Playas y entorno natural<i className="material-icons" style={{transform: isInnerSubMenuOpen['playas'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['playas'] ? styles.submenuActive1 : ''}`}>
                                    <li>Ubicaciones</li>
                                    <li>Equipamientos</li>
                                    <li>Bandera Azul</li>
                                    <li>Calidad</li>
                                    <li>Parajes</li>
                                    <li>Rutas y Senderos</li>
                                    <li>Flora y fauna</li>
                                    <li>Avistamiento de Aves</li>
                                    <li>Salinas de Astur</li>
                                </ul>
                            </li>
                            <li className={styles.paddingMenu}>
                            <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('cultura', e)}>Cultura<i className="material-icons" style={{transform: isInnerSubMenuOpen['cultura'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['cultura'] ? styles.submenuActive1 : ''}`}>
                                    <li>Historia</li>
                                    <li>Punta Umbria Marinera</li>
                                    <li>Patrimonio y visitas</li>
                                    <li>Costumbres y tradiciones</li>
                                    <li>Teatro del Mar</li>
                                    <li>Salas de Exposiciones</li>
                                    <li>Biblioteca</li>
                                </ul>
                            </li>
                            <li className={styles.paddingMenu}>
                            <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('deporte', e)}>Deporte y turismo activo<i className="material-icons" style={{transform: isInnerSubMenuOpen['deporte'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['deporte'] ? styles.submenuActive1 : ''}`}>
                                    <li>Instalaciones</li>
                                    <li>Destino de concentraciones y entrenamientos</li>
                                    <li>Turismo activo</li>
                                    <li>Puertos Deportivos</li>
                                    <li>Cicloturismo</li>
                                    <li>Eventos deportivos</li>
                                </ul>
                            </li>
                            <li className={styles.paddingMenu}>
                            <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('gastronomia', e)}>Gastronomía<i className="material-icons" style={{transform: isInnerSubMenuOpen['gastronomia'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['gastronomia'] ? styles.submenuActive1 : ''}`}>
                                    <li>Zonas de Restauración</li>
                                    <li>Establecimientos</li>
                                </ul>
                            </li>
                            <li className={styles.paddingMenu}>
                            <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('ocio', e)}>Ocio<i className="material-icons" style={{transform: isInnerSubMenuOpen['ocio'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['ocio'] ? styles.submenuActive1 : ''}`}>
                                    <li>Zonas de Ocio</li>
                                    <li>Establecimientos</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li  className={styles.paddingMenu}>
                        <Link className={styles.opcionPadre} href="#" onClick={(e) => handleParentClick('planifica', e)}>Planifica<i className="material-icons" style={{transform: isSubMenuOpen['planifica'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                        <ul className={`${styles.submenu} ${isSubMenuOpen['planifica'] ? styles.submenuActive : ''}`}>
                        <li className={styles.paddingMenu}>
                            <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('llegar', e)}>Cómo llegar<i className="material-icons" style={{transform: isInnerSubMenuOpen['llegar'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['llegar'] ? styles.submenuActive1 : ''}`}>
                                    <li>Por Tierra, Mar y Aire</li>
                                    <li>Alrededores</li>
                                    <li>Descubre Huelva desde Punta</li>
                                </ul>
                            </li>
                            <li className={styles.paddingMenu}>
                            <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('movilidad', e)}>Movilidad<i className="material-icons" style={{transform: isInnerSubMenuOpen['movilidad'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['movilidad'] ? styles.submenuActive1 : ''}`}>
                                    <li>Información de interés</li>
                                    <li>Cómo moverse</li>
                                    <li>La Canoa</li>
                                    <li>Dónde aparcar</li>
                                </ul>
                            </li>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" >Alojamientos</Link>  
                            </li>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" >Convenciones y concentraciones</Link>  
                            </li>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" >Compras</Link>  
                            </li>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" >Salud y belleza</Link>  
                            </li>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" >Viaja con mascotas</Link>  
                            </li> 
                        </ul>
                    </li> 
                    <li className={styles.paddingMenu}>
                        <Link className={`${styles.opcionPadre}`} href="#" onClick={(e) => handleParentClick('oficina', e)}>Oficina de turismo<i className="material-icons" style={{transform: isSubMenuOpen['oficina'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                        <ul className={`${styles.submenu}  ${isSubMenuOpen['oficina'] ? styles.submenuActive : ''}`}>
                            <li className={styles.paddingMenu}>
                            <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('donde', e)}>Dónde estamos<i className="material-icons" style={{transform: isInnerSubMenuOpen['donde'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['donde'] ? styles.submenuActive1 : ''}`}>
                                    <li>Contacta</li>
                                    <Link href="#" style={{ marginLeft: '10px' }}><img src="/images/whatsapp blanco.png" width={20} height={20}></img></Link>
                                </ul>
                            </li>
                            <li className={styles.paddingMenu}>
                            <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('enlaces', e)}>Enlaces<i className="material-icons" style={{transform: isInnerSubMenuOpen['enlaces'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['enlaces'] ? styles.submenuActive1 : ''}`}>
                                    <li>Ayto. Punta Umbría</li>
                                    <li>Onda Punta Radio - Punta Umbría Noticias</li>
                                    <li>Sede Electrónica</li>
                                </ul>
                            </li>
                            <li className={styles.paddingMenu}>
                            <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('descargas', e)}>Descargas<i className="material-icons" style={{transform: isInnerSubMenuOpen['descargas'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['descargas'] ? styles.submenuActive1 : ''}`}>
                                    <li>Planos, guías y audioguías</li>
                                    <li>Folletos</li>
                                </ul>
                            </li>
                            <li className={styles.paddingMenu}>
                            <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('edificios', e)}>Servicios (edificios) municipales<i className="material-icons" style={{transform: isInnerSubMenuOpen['edificios'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['edificios'] ? styles.submenuActive1 : ''}`}>
                                    <li>Servicio Atención a la Ciudadanía</li>
                                    <li>Policia Local</li>
                                    <li>Ayuntamiento</li>
                                    <li>Edificio Galeón</li>
                                    <li>Servicios Técnicos - Urbanismo</li>
                                </ul>
                            </li>
                            <li className={styles.paddingMenu}>
                            <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('galeria', e)}>Galería<i className="material-icons" style={{transform: isInnerSubMenuOpen['galeria'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['galeria'] ? styles.submenuActive1 : ''}`}>
                                    <div style={{ display: 'flex', alignItems: 'end', gap: 10}}>
                                    <Link href="#"><i className="material-icons">image</i></Link>
                                    <Link href="#"><i className="material-icons">videocam</i></Link>
                                    <Link href="#"><img src="/images/youtube.png" width={20} height={17}></img></Link>
                                    </div>
                                </ul>
                            </li>
                            <li className={styles.paddingMenu}>
                            <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('otros', e)}>Otros servicios<i className="material-icons" style={{transform: isInnerSubMenuOpen['otros'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['otros'] ? styles.submenuActive1 : ''}`}>
                                    <li>Centro de Salud</li>
                                    <li>Emergencias 112</li>
                                    <li>Farmacias de Guardia</li>
                                    <li>Servicios Religiosos</li>
                                    <li>Mercadillos</li>
                                    <li>Taxi</li>
                                </ul>
                            </li>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" >Rutas interactivas 360º</Link>  
                            </li>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" >Puntos de interés</Link>  
                            </li>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" >WIFI pública WIFI4EU</Link>  
                            </li>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" >Área profesional<br></br>(solicitud y alta de establecimientos)</Link>  
                            </li>
                        </ul>
                    </li>
                    <li  className={styles.paddingMenu}>
                        <Link className={styles.opcionPadre} href="#" onClick={(e) => handleParentClick('hoy', e)}>Hoy en Punta<i className="material-icons" style={{transform: isSubMenuOpen['hoy'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                        <ul className={`${styles.submenu} ${isSubMenuOpen['hoy'] ? styles.submenuActive : ''}`}>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="/agenda" >Agenda</Link>  
                            </li>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" onClick={(e) => handleInnerParentClick('eventos', e)}>Eventos por temática<i className="material-icons" style={{transform: isInnerSubMenuOpen['eventos'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                                <ul className={`${styles.submenu} ${isInnerSubMenuOpen['eventos'] ? styles.submenuActive1 : ''}`}>
                                    <li>Culturales</li>
                                    <li>Deportivos</li>
                                </ul>
                            </li>
                        </ul>
                    </li> 
                    <li  className={styles.paddingMenu}>
                    {tiempo && ( 
                    <Link href="#" className={`${styles.opcionPadre} ${styles.meteorologia}`} onClick={(e) => handleParentClick('meteorologia', e)}> <img src={`http://openweathermap.org/img/w/${tiempo.list[0].weather[0].icon}.png`} alt="Weather icon"></img>{Math.round(tiempo.list[0].main.temp)} °C<i className="material-icons" style={{transform: isSubMenuOpen['meteorologia'] ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</i></Link>
                    )} 
                        <ul className={`${styles.submenu} ${isSubMenuOpen['meteorologia'] ? styles.submenuActive : ''}`}>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" >Clima de Punta Umbría</Link>  
                            </li>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" >Estado del mar</Link>  
                            </li>
                            <li className={styles.paddingMenu}>
                                <Link className={`${styles.opcionPadre} ${styles.opcionPadre1}`} href="#" >Tabla de mareas</Link>  
                            </li>
                            <div className={styles.prevision}>
                                {weatherData.map((day, index) => (
                                <div key={index} className={styles.cadaPrevision}>
                                    <p className={styles.fecha}>{day.date}</p>
                                    <div className={styles.tiempo}>
                                        <img src={`http://openweathermap.org/img/w/${day.icon}.png`} alt="Weather icon" />
                                        <p>{day.tempMax}°C / {day.tempMin}°C</p>
                                    </div>
                                </div>
                                ))} 
                            </div>
                        </ul>
                    </li> 
                </ul>
            </nav>
            </div>
                    
        </header>
    )
  }