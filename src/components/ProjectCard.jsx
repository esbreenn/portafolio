// src/components/ProjectCard.jsx
import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Si tienes imágenes para proyectos, las puedes poner aquí */}
      {project.image && (
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-100">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Ver Demo</a>
          )}
          {project.repoLink && (
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline dark:text-gray-300">Ver Código</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;