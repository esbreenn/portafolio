// src/components/ProjectCard.jsx
import React, { useState, useEffect } from 'react';

function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [project.images]);

  const goToPrevImage = () => {
    if (project.images && project.images.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    }
  };

  const goToNextImage = () => {
    if (project.images && project.images.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }
  };

  const displayImage = Array.isArray(project.images) && project.images.length > 0
    ? project.images[currentImageIndex]
    : null;

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-48">
  
        <div
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          className="flex transition-transform duration-700 ease-in-out w-full h-full"
        >
          {project.images && project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} - Slide ${index + 1}`} 
              className="w-full h-full object-contain flex-shrink-0" 
            />
          ))}
        </div>

        {/* Botones de navegación */}
        {project.images && project.images.length > 1 && (
          <>
            <button
              onClick={goToPrevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-lg hover:bg-opacity-75 transition-colors focus:outline-none"
              aria-label="Previous image"
            >
              &#10094;
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-lg hover:bg-opacity-75 transition-colors focus:outline-none"
              aria-label="Next image"
            >
              &#10095;
            </button>
          </>
        )}


        {project.images && project.images.length > 1 && (
          <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2'>
            {project.images.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${i === currentImageIndex ? "bg-white" : "bg-gray-400"}`}
              ></div>
            ))}
          </div>
        )}
      </div>

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