// src/pages/ContactPage.jsx
import React from 'react';

function ContactPage() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Contáctame</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          ¿Tienes una pregunta o una oportunidad? ¡Hablemos!
        </p>
        {/* Aquí puedes añadir un formulario de contacto, tu email, enlaces a redes, etc. */}
      </div>
    </section>
  );
}

export default ContactPage;