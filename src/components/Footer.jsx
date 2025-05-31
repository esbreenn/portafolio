// Footer.jsx
import React from 'react';
import { EnvelopeIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/solid'; // Algunos ejemplos

// Puedes usar 'MarkGithubIcon', 'FaLinkedinIn', 'FaEnvelope' de 'react-icons/fa'
// o buscar iconos que te gusten en Heroicons

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-black text-white text-center p-4 shadow-inner mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-sm mb-4">&copy; {currentYear} Gonzalo Romero. Todos los derechos reservados.</p>

        <h3 className="text-xl font-semibold mb-4">Conéctate conmigo</h3>

        <div className="flex justify-center space-x-6 mb-4">
          {/* GitHub */}
          <a
            href="https://github.com/esbreenn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Mi perfil de GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387 0.599 0.111 0.793-0.261 0.793-0.577v-2.234c-3.338 0.726-4.033-1.416-4.033-1.416-0.546-1.387-1.333-1.756-1.333-1.756-1.082-0.742 0.082-0.726 0.082-0.726 1.192 0.086 1.816 1.29 1.816 1.29 1.052 1.815 2.77 1.299 3.432 0.993 0.108-0.775 0.418-1.299 0.762-1.599-2.625-0.295-5.06-1.307-5.06-5.803 0-1.285 0.461-2.339 1.21-3.169-0.107-0.295-0.533-1.499 0.117-3.123 0 0 0.988-0.316 3.221 1.209 0.93-0.258 1.921-0.387 2.912-0.387 0.991 0 1.982 0.129 2.912 0.387 2.232-1.525 3.222-1.209 3.222-1.209 0.65 1.624 0.223 2.829 0.118 3.123 0.749 0.831 1.209 1.885 1.209 3.169 0 4.492-2.436 5.507-5.062 5.801 0.381 0.325 0.758 0.994 0.758 2.008v3.003c0 0.317 0.192 0.694 0.801 0.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gonzalo-romero-708888294/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Mi perfil de LinkedIn"
          >
             
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="inline-block">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.36 3.037-3.284 3.037 0v5.604h-3zm-1.5-11.232c0-.986-.778-1.764-1.75-1.764s-1.75.79-1.75 1.764.778 1.764 1.75 1.764 1.75-.79 1.75-1.764z"></path>
            </svg>
          </a>

      
          <a
            href="programaciongonzalitox@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Enviar un correo electrónico"
          >
            <EnvelopeIcon className="h-6 w-6 inline-block" /> 
          </a>
        </div>

  
        <p className="text-xs text-gray-500">Diseñado y desarrollado por Gonzalo Romero.</p>
      </div>
    </footer>
  );
}

export default Footer;