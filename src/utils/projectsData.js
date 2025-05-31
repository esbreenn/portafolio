// src/utils/projectsData.js
const projectsData = [
  {
    id: 1,
    title: "Sistema de Gestión de Pedidos",
    description: "Integración con Supabase CRUD completo. Para el almacenamiento y manejo de pedidos, usuarios, roles, ids, emails. Chatbot con IA generativa de Gemini. Modelo ajustado para tienda de tecnología.",
    image: "/images/project1.png", // Si tienes una imagen en /public/images/
    tech: ["React", "Supabase", "Gemini AI", "Express.js"],
    liveLink: "https://ejemplo-pedidos.com",
    repoLink: "https://github.com/tuusuario/sistema-pedidos",
  },
  {
    id: 2,
    title: "API RESTful para E-commerce",
    description: "Backend con Express, MongoDB, JWT. CRUD completo con base de datos no relacional y creación de API robusta.",
    image: "/images/project2.png",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    liveLink: null, // No hay demo vivo si es solo backend
    repoLink: "https://github.com/tuusuario/api-ecommerce",
  },
  // Añade más proyectos aquí
  {
    id: 3,
    title: "Sitio Web de Portafolio Personal",
    description: "Este mismo portafolio, construido con React, Vite y Tailwind CSS, demostrando mis habilidades frontend.",
    image: "/images/project3.png",
    tech: ["React", "Vite", "Tailwind CSS"],
    liveLink: "https://tu-portafolio.com",
    repoLink: "https://github.com/tuusuario/mi-portafolio",
  },
];

export default projectsData;