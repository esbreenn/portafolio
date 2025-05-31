// src/utils/projectsData.js
import headerImage from '../assets/images/header.png'; // Asegúrate que la ruta sea correcta desde projectsData.js a la imagen
import preguntasImage from '../assets/images/preguntas.png';
import reclamosImage from '../assets/images/reclamos.png';

const projectsData = [
  {
    id: 1,
    title: "Internet Para Todos",
    description: "Creacion de la pagina de IPT, mostrando diversas secciones y funcionalidades.",
    images: [
      headerImage, // Asigna la variable importada
      preguntasImage,
      reclamosImage,
    ],
    tech: ["HTML", "CSS", "MongoDB", "JS"],
    liveLink: "https://esbreenn.github.io/web-IPT/",
    repoLink: "https://github.com/esbreenn/web-IPT",
  },
  {
    id: 2,
    title: "Internet Para Todos",
    description: "Creacion de la pagina de IPT",
    images: [
      headerImage, // Asigna la variable importada
    ],
    tech: ["HTML", "CSS", "MongoDB", "JS"],
    liveLink: null,
    repoLink: "https://github.com/esbreenn/web-IPT",
  },
];

export default projectsData;