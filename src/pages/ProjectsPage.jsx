// src/pages/ProjectsPage.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../utils/projectsData';

function ProjectsPage() {
  return (
    <section className="py-8 sm:py-12 bg-gray-100 dark:bg-gray-800"> {/* Ajusta padding vertical */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-6 sm:mb-8">Mis Proyectos</h2> {/* Ajusta tamaño de fuente y margen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"> {/* Ajusta columnas y gap */}
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;