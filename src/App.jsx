// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage'; 



function App() {
  return (
   <Router basename="/portafolio/"> {/* <--- AÑADIDO basename */}      <Routes>
        {/* Define una ruta principal que usa  MainLayout. */}
        {/* Las rutas anidadas se renderizarán dentro del <Outlet /> en MainLayout. */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} /> {/* Ruta para la página principal "/" */}
          <Route path="about" element={<AboutPage />} /> {/* Ruta para "/about" */}
          <Route path="projects" element={<ProjectsPage />} /> {/* Ruta para "/projects" */}
          <Route path="contact" element={<ContactPage />} /> {/* Ruta para "/contact" */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;