// src/components/Hero.jsx
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import codingAnimationData from '../assets/coding-animation.json';
// Importa TypeAnimation SOLO si decides mantenerlo aquí y no en el Header
// import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    // CAMBIO 1: Fondo de la sección con clases dark:
    // bg-gray-800 para el modo claro, dark:bg-gray-900 para el modo oscuro
    <section className="relative flex flex-col items-center justify-center p-4 min-h-[75vh] md:min-h-screen bg-gray-800 dark:bg-gray-900 text-white text-center overflow-hidden">
      {/* ANIMACIÓN LOTTIE DE FONDO/DECORATIVA */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-20">
        <Player
          autoplay
          loop
          src={codingAnimationData}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
        {/* CAMBIO 2: H1 para un título estático (si ya usas TypeAnimation en el Header)
            Si quieres TypeAnimation aquí también, házmelo saber para ajustarlo.
            El color text-white dark:text-white es redundante aquí si el fondo es siempre oscuro/gris oscuro.
            Lo he puesto para claridad, pero text-white solo podría ser suficiente si el fondo no es claro.
        */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white dark:text-white">
          ¡Hola, soy Gonzalo Romero!
        </h1>
        {/* CAMBIO 3: Párrafo de Bienvenida */}
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white dark:text-gray-300">
          Desarrollador Full Stack | Construyendo experiencias digitales impactantes.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          {/* CAMBIO 4: Botones con colores de acento de la Opción 2 */}
          {/* Botón principal (Descargar CV) */}
          <button className="bg-green-500 text-gray-900 hover:bg-green-400 dark:bg-green-400 dark:hover:bg-green-300 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out w-full sm:w-auto">
            Descargar CV
          </button>
          {/* Botón secundario (Ver Proyectos) */}
          <button className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-400 hover:text-gray-900 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-950 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out w-full sm:w-auto">
            Ver Proyectos
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;