// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function Header({ toggleDarkMode, isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 dark:bg-black text-white py-4 px-4 shadow-md sm:py-6">
      <div className="container mx-auto flex justify-between items-center h-16 sm:h-20">
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

        {/* CÓDIGO CORREGIDO: SEPARA EL BOTÓN DE TOGGLE DEL BOTÓN DE HAMBURGUESA */}
        <div className="flex items-center space-x-4">
          {/* BOTÓN DE TOGGLE DEL MODO OSCURO (ESTE ES EL QUE OCULTAMOS) */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-white hover:bg-gray-700 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white hidden" // <--- AÑADIDO 'hidden' SOLO AQUÍ
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-300" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-300" />
            )}
          </button>

          {/* BOTÓN DE HAMBURGUESA PARA MÓVIL (ESTE QUEDA VISIBLE) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>


        {/* Navegación para escritorio (sigue igual) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300 transition-colors duration-300">Inicio</Link></li>
            <li><Link to="/about" className="hover:text-gray-300 transition-colors duration-300">Sobre Mí</Link></li>
            <li><Link to="/projects" className="hover:text-gray-300 transition-colors duration-300">Proyectos</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300 transition-colors duration-300">Contacto</Link></li>
          </ul>
        </nav>

        {/* MODIFICACIÓN CLAVE: MENÚ DESPLEGABLE CON ANIMACIÓN */}
        {/* Aquí es donde aplicamos las clases de transición y las clases condicionales */}
        <nav
          className={`md:hidden absolute top-16 left-0 right-0 bg-gray-800 dark:bg-black py-4 shadow-lg z-20
            transition-all duration-300 ease-in-out transform
            ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}
          `}
        >
          <ul className="flex flex-col items-center space-y-4" >
            <li><Link to="/" className="block text-white hover:text-gray-300 transition-colors duration-300" onClick={() => setIsOpen(false)}>Inicio</Link></li>
            <li><Link to="/about" className="block text-white hover:text-gray-300 transition-colors duration-300" onClick={() => setIsOpen(false)}>Sobre Mí</Link></li>
            <li><Link to="/projects" className="block text-white hover:text-gray-300 transition-colors duration-300" onClick={() => setIsOpen(false)}>Proyectos</Link></li>
            <li><Link to="/contact" className="block text-white hover:text-gray-300 transition-colors duration-300" onClick={() => setIsOpen(false)}>Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;