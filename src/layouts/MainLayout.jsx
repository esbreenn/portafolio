// src/layouts/MainLayout.jsx
import React, { useState, useEffect } from 'react'; // <--- Importa useState y useEffect
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
  // 1. Estado para el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // 2. Lógica para inicializar el estado del modo oscuro:
    //    - Primero, comprueba si el usuario tiene una preferencia guardada en localStorage.
    //    - Si no, comprueba la preferencia del sistema operativo.
    //    - Por defecto, asume el modo claro si no hay preferencias.

    if (localStorage.getItem('theme') === 'dark') {
      return true;
    }
    if (localStorage.getItem('theme') === 'light') {
      return false;
    }
    // Si no hay preferencia en localStorage, usa la preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 3. Efecto para aplicar/remover la clase 'dark' al elemento <html>
  //    y guardar la preferencia en localStorage cada vez que `isDarkMode` cambie.
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]); // Este efecto se ejecuta cada vez que `isDarkMode` cambia

  // 4. Función para alternar el modo oscuro/claro
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); // Invierte el estado actual
  };

  return (
    // Aplica las clases de fondo globales aquí para el contenedor principal.
    // Esto asegura que el fondo de toda la aplicación cambie con el modo.
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">
      {/* 5. Pasa la función `toggleDarkMode` y el estado `isDarkMode` al Header */}
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;