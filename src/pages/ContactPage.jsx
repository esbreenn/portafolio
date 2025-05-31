// src/pages/ContactPage.jsx (o donde tengas tu formulario de contacto)
import React, { useState } from 'react';

function ContactPage() {
  // 1. Estados para cada campo del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // Para mostrar mensajes al usuario (éxito/error)

  // 2. Manejadores de cambio para actualizar el estado cuando el usuario escribe
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // 3. Manejador de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario (recargar la página)

    setStatus('Enviando...'); // Mensaje de "cargando"

    // Aquí iría la lógica para enviar el formulario.
    // Opciones comunes:
    // a) Servicio de terceros como Formspree, Netlify Forms, Getform.io (la más fácil)
    // b) Una API backend que tú mismo crees (requiere un servidor)

    try {
      // Ejemplo con un servicio de terceros (Formspree es muy popular por su simplicidad)
      // Necesitarías configurar un endpoint en Formspree y usar tu URL de formulario.
      // Más abajo te explico cómo.
      const response = await fetch("https://formspree.io/f/xldnrzlq", { // ¡Cambia esto por tu ID de Formspree!
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      });

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        // Limpiar el formulario después del envío exitoso
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        setStatus(`Error al enviar el mensaje: ${data.errors ? data.errors.map(err => err.message).join(', ') : 'Error desconocido'}`);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('Hubo un problema de conexión al enviar el mensaje.');
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-6 sm:mb-8">Contáctame</h2>
        <div className="max-w-md mx-auto bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name} // El valor del input está controlado por el estado 'name'
                onChange={handleNameChange} // Actualiza el estado cuando el input cambia
                required // Hace el campo obligatorio en HTML5
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                Correo Electrónico:
              </label>
              <input
                type="email" // Usar type="email" para validación básica de correo
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                required
                rows="5" // Número de filas visibles
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Enviar Mensaje
            </button>

            {status && ( // Muestra el mensaje de estado si existe
              <p className="mt-4 text-center text-sm font-semibold text-gray-800 dark:text-gray-200">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;