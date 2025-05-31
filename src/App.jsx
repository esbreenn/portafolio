// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa tu layout principal
import MainLayout from './layouts/MainLayout';

// Importa tus componentes de página
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage'; // Asumo que ConcatPage.jsx es un error tipográfico y es ContactPage.jsx

// Si tienes estilos específicos para App.jsx que no son globales, puedes importarlos aquí:
// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define una ruta principal que usa tu MainLayout. */}
        {/* Las rutas anidadas se renderizarán dentro del <Outlet /> en MainLayout. */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} /> {/* Ruta para la página principal "/" */}
          <Route path="about" element={<AboutPage />} /> {/* Ruta para "/about" */}
          <Route path="projects" element={<ProjectsPage />} /> {/* Ruta para "/projects" */}
          <Route path="contact" element={<ContactPage />} /> {/* Ruta para "/contact" */}
          {/* Puedes añadir más rutas aquí si creas más páginas */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;