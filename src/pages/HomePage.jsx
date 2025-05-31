// src/pages/HomePage.jsx
import React from 'react';
// Importa el componente Hero que crearemos en el Paso 5
import Hero from '../components/Hero'; // Asumo que Hero.jsx existe en src/components/

function HomePage() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <Hero /> {/* Aquí renderizamos tu sección de héroe */}
      <div className="container mx-auto px-4 text-center mt-8">
        <h2 className="text-3xl font-bold mb-4">
  Mi Viaje en el Desarrollo Web
</h2>
<p className="text-lg">
  Este portafolio es una ventana a mi dedicación y a la evolución de mis habilidades como Desarrollador Full Stack. Conoce más sobre mi trayectoria y visión.
</p>
      </div>
    </section>
  );
}

export default HomePage;