let index = 0;

const texts = [
  "SMACSS:(Scalable and Modular Architecture for CSS o Arquitectura escalable y modular para CSS en español) es una guía de estilo que sigue cinco categorías simples, a fin de examinar, documentar y adaptar el proceso de diseño de un sitio web. Más información en el siguiente video:   ",
  "ITCSS: (Inverted Triangle architecture for CSS o Arquitectura del triangulo invertido en español) son una serie de normas o planteamientos para crear el CSS, como una filosofía. Así, ITCSS no implementa nada en concreto, no es como una librería para realizar cosas típicas, sino más bien podríamos pensar en él como un Meta Framework. Más información en el siguiente video:  ",
  "OOCSS: (Object Oriented CSS o CSS orientado a objetos en español) Nos permite separar el contenedor y el contenido con 'objetos', como cualquier otro metodo de codigo basado en objetos, el objetivo es fomentar la reutilización del codigo, y utilizar hojas de estilo más rapidas y faciles. Más información en el siguiente video: ",
];

const videos = [
  "https://www.youtube.com/embed/6co781JgoqQ?si=kbyau-RHTLJuQKf8",
  "https://www.youtube.com/embed/jTCTpQFi-Wo?si=KDl-W_KQizGyKkX4",
  "https://www.youtube.com/embed/rZGdV-iY21I?si=x1HucKMy1WgvIRu4"
];

function changeText() {
  index = (index + 1) % texts.length;
  document.getElementById('DText').textContent = texts[index];
  document.getElementById('Frame').src = videos[index];
}