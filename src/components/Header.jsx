// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function Header({ toggleDarkMode, isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Definición de enlaces de navegación para evitar repetición en el JSX
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Mí', path: '/about' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Contacto', path: '/contact' },
  ];

  return (
    <header className="bg-gray-800 dark:bg-black text-white py-4 px-4 shadow-md sm:py-6">
      <div className="container mx-auto flex justify-between items-center h-16 sm:h-20">
        {/* Logo/Nombre del Portafolio */}
        <Link to="/" className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300">
          <span className="w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center text-lg font-bold">GR</span>
          <TypeAnimation
            sequence={[
              1000,
              'Gonzalo Romero',
              1000,
              '',
              2000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            className="text-2xl sm:text-2xl md:text-2xl font-extrabold bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text TypeAnimation"
          />
        </Link>

        {/* Contenedor para el botón de modo oscuro y el botón de hamburguesa */}
        <div className="flex items-center space-x-4">
          {/* Botón para alternar Modo Oscuro/Claro */}
          {/* Visible en pantallas medianas y grandes (md:block), oculto en móviles (hidden) */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-white hover:bg-gray-700 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white  md:block"
            aria-label="Alternar modo oscuro/claro"
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-300" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-300" />
            )}
          </button>

          {/* Botón de Hamburguesa para dispositivos móviles */}
          {/* Visible solo en pantallas pequeñas (md:hidden) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} // Accesibilidad mejorada
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                // Icono de "X" cuando el menú está abierto
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Icono de Hamburguesa cuando el menú está cerrado
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navegación para Escritorio */}
        {/* Visible solo en pantallas medianas y grandes (hidden md:block) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-gray-300 transition-colors duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menú Desplegable para Móviles con Animación */}
        {/* Visible solo en pantallas pequeñas (md:hidden) */}
        {/* Clases de animación: 'transition-all' para animar, 'transform' para usar translate,
            'translate-y-0' para visible, '-translate-y-full' para oculto,
            'opacity-100' para visible, 'opacity-0' para oculto,
            'visible'/'invisible' para controlar la interacción y visibilidad fuera de pantalla. */}
        <nav
          className={`md:hidden absolute top-16 left-0 right-0 bg-gray-800 dark:bg-black py-4 shadow-lg z-20
            transition-all duration-300 ease-in-out transform
            ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}
          `}
        >
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block text-white hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en un enlace
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;