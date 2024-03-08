"use client"
import React, { useState} from 'react';
import { Roboto } from 'next/font/google'
import './globals.css'
import {Navigation} from '../components/Navigation'
import {Busqueda} from '../components/Busqueda'
import {Footer} from '../components/Footer'
import PageContext from './PageContext.js';

const roboto = Roboto({ 
  weight: ["300", "400", "700", "900"],
  styles: ["normal", "italic"],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');

  return (
    <PageContext.Provider value={{ setTitle, setDescription, setKeywords }}>
      <html lang="es">
        <head>
          <title>{title}</title>
          <meta name="description" content={description} />
          {keywords && <meta name="keywords" content={keywords} />}
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"/>
          <script src="https://kit.fontawesome.com/YOUR_KIT_ID.js" crossorigin="anonymous"></script>
        </head>
        <body className={roboto.className}>
          <Navigation/>
          {/* <Busqueda/> */}
          {children}
          <Footer/>
          </body>
      </html>
    </PageContext.Provider>
  );
}
