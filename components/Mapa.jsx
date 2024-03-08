"use client"
import styles from './Mapa.module.css';
import Link from "next/link"
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const customIcon = L.icon({
  iconUrl: '/images/patrimonio.png',
  iconSize: [30, 33],
  iconAnchor: [16, 32],
});

const customIcon2 = L.icon({
  iconUrl: '/images/playa.png',
  iconSize: [30, 33],
  iconAnchor: [16, 32],
});

const customIcon3 = L.icon({
  iconUrl: '/images/info.png',
  iconSize: [30, 33],
  iconAnchor: [16, 32],
});

const markers = [
  {
    position: [37.19377820084282, -6.967917534793984], 
    icon: customIcon, 
    popupText: 'Yacimiento El Eucaliptal ',
    imageUrl: '/images/fondo.jpg',
    linkUrl: '/mantenimiento', 
  },
  {
    position: [37.177793051427514, -6.957235180279441], 
    icon: customIcon, 
    popupText: 'Torre Almenara',
    imageUrl: '/images/fondo2.jpg',
    linkUrl: '#', 
  },
  {
    position: [37.1828851297082, -6.972054249347669    ], 
    icon: customIcon, 
    popupText: 'Casa de los ingleses',
    imageUrl: '/images/fondo.jpg',
    linkUrl: '/mantenimiento', 
  },
  {
    position: [37.18069115839685, -6.967742528021171    ], 
    icon: customIcon3, 
    popupText: 'Oficina de Turismo',
    imageUrl: '/images/fondo2.jpg',
    linkUrl: '#', 
  },
  {
    position: [37.181670163786244, -6.960623056707169], 
    icon: customIcon, 
    popupText: 'Mercado El Carmen',
    imageUrl: '/images/fondo.jpg',
    linkUrl: '/mantenimiento', 
  },
  {
    position: [37.182135579512405, -6.959876499479945], 
    icon: customIcon, 
    popupText: 'Lonja',
    imageUrl: '/images/fondo2.jpg',
    linkUrl: '#', 
  },
  {
    position: [37.18254473054836, -6.9672886960846405], 
    icon: customIcon, 
    popupText: 'Ayuntamiento',
    imageUrl: '/images/fondo.jpg',
    linkUrl: '/mantenimiento', 
  },
  {
    position: [37.18118464899966, -6.961154396929102], 
    icon: customIcon, 
    popupText: 'Parroquia El Carmen',
    imageUrl: '/images/fondo2.jpg',
    linkUrl: '#', 
  },
  {
    position: [37.177996534054586, -6.956693523797835], 
    icon: customIcon, 
    popupText: 'Capilla de Lourdes',
    imageUrl: '/images/fondo.jpg',
    linkUrl: '/mantenimiento', 
  },
  {
    position: [37.18480529511076, -6.966578177585492], 
    icon: customIcon, 
    popupText: 'Santa María del Mar',
    imageUrl: '/images/fondo2.jpg',
    linkUrl: '#', 
  },
  {
    position: [37.211649719837595, -7.045064782274395], 
    icon: customIcon, 
    popupText: 'Laguna El Portil',
    imageUrl: '/images/fondo.jpg',
    linkUrl: '/mantenimiento', 
  },
  {
    position: [37.20516174748381, -6.992444877144906], 
    icon: customIcon, 
    popupText: 'Salinas del Astur',
    imageUrl: '/images/fondo2.jpg',
    linkUrl: '#', 
  },
  {
    position: [37.18307160385869, -6.967176900797331    ], 
    icon: customIcon, 
    popupText: 'Teatro del Mar',
    imageUrl: '/images/fondo2.jpg',
    linkUrl: '#', 
  },
  {
    position: [37.180856731074286, -6.967403386237316    ], 
    icon: customIcon, 
    popupText: 'Monumento marineros',
    imageUrl: '/images/fondo.jpg',
    linkUrl: '/mantenimiento', 
  },
  {
    position: [37.1927453703191, -6.9764873445991045    ], 
    icon: customIcon, 
    popupText: 'Cementerio',
    imageUrl: '/images/fondo2.jpg',
    linkUrl: '#', 
  },
  {
    position: [37.2230271901155, -7.0365140486561994    ], 
    icon: customIcon, 
    popupText: 'Ermita Santa Cruz',
    imageUrl: '/images/fondo.jpg',
    linkUrl: '/mantenimiento', 
  },
  {
    position: [37.18591913324977, -6.972405933621842    ], 
    icon: customIcon, 
    popupText: 'Complejo José Hernández',
    imageUrl: '/images/fondo2.jpg',
    linkUrl: '#', 
  },
  {
    position: [37.19486545009933, -6.971438417356349    ], 
    icon: customIcon, 
    popupText: 'Polideportivo Gil Hernández',
    imageUrl: '/images/fondo.jpg',
    linkUrl: '/mantenimiento', 
  },
  {
    position: [37.20864361598963, -7.050032082010966    ], 
    icon: customIcon2, 
    popupText: 'El Portil',
    imageUrl: '/images/fondo2.jpg',
    linkUrl: '#', 
  },
  {
    position: [37.179554520183856, -6.956261702108995    ], 
    icon: customIcon, 
    popupText: 'Muelle las Canoas ',
    imageUrl: '/images/fondo.jpg',
    linkUrl: '/mantenimiento', 
  },
  {
    position: [37.17730895885815, -6.956793817155659    ], 
    icon: customIcon, 
    popupText: 'Casa del guarda',
    imageUrl: '/images/fondo2.jpg',
    linkUrl: '#', 
  },
];

export function Mapa () {

  const center = [37.1821300,  -6.9660500];
  
  
    return(
    <MapContainer  className={styles.map}
      center={center}
      zoom={13}
      style={{ width: '100%'}}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

      {markers.map((marker, index) => (
        <Marker 
          key={index}
          position={marker.position}
          icon={marker.icon}
        >
          <Popup offset={[0, -20]} className={styles.customPopup}>
            <Link href={marker.linkUrl}>
              <p>{marker.popupText}</p>
              <img src={marker.imageUrl}></img>
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    )
}