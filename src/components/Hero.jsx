// src/components/Hero.jsx
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import codingAnimationData from '../assets/coding-animation.json';
import { Link } from 'react-router-dom';
// import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    // Sección principal del Hero:
    // Centra el contenido vertical y horizontalmente.
    // min-h-[75vh] para móviles y md:min-h-screen para escritorio para asegurar altura.
    // Fondo oscuro en modo claro (bg-gray-800) y más oscuro en modo oscuro (dark:bg-gray-900).
    <section className="relative flex flex-col items-center justify-center p-4 min-h-[75vh] md:min-h-screen bg-gray-800 dark:bg-gray-900 text-white text-center overflow-hidden">
      {/* Animación Lottie de fondo decorativa:
          Ocupa todo el espacio, con baja opacidad y z-index bajo para no interferir con el contenido. */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-20">
        <Player
          autoplay
          loop
          src={codingAnimationData}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

    
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white dark:text-white">
  Gonzalo Romero
</h1>
<p className="text-lg sm:text-xl md:text-2xl mb-8 text-white dark:text-gray-300">
  Full Stack Developer. Conectando el front y el back para soluciones web eficientes.
</p>
        
      
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

          <button className="bg-green-500 text-gray-900 hover:bg-green-400 dark:bg-green-400 dark:hover:bg-green-300 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out w-full sm:w-auto">
            Descargar CV
          </button>
    
                   <Link
            to="/projects" 
            className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-400 hover:text-gray-900 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-950 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out w-full sm:w-auto flex items-center justify-center"
          >
            Ver Proyectos
          </Link>

          
        </div>
      </div>
    </section>
  );
}

export default Hero;