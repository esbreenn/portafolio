// src/pages/AboutPage.jsx
import React from 'react';

function AboutPage() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Acerca de Mí</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Soy un desarrollador full-stack apasionado por crear soluciones web innovadoras.
          Conoce más sobre mi experiencia y habilidades.
        </p>
        {/* Aquí puedes añadir más contenido: tu foto, una descripción detallada, habilidades, etc. */}
      </div>
    </section>
  );
}

export default AboutPage;