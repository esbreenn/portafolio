// src/pages/HomePage.jsx
import React from 'react';
// Importa el componente Hero que crearemos en el Paso 5
import Hero from '../components/Hero'; // Asumo que Hero.jsx existe en src/components/

function HomePage() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <Hero /> {/* Aquí renderizamos tu sección de héroe */}
      <div className="container mx-auto px-4 text-center mt-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">¡Bienvenido a mi Portafolio!</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Mi nombre es Gonzalo Romero, gracias por visitarme
        </p>
      </div>
    </section>
  );
}

export default HomePage;