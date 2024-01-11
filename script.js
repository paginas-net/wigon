
// Variable para controlar la posición actual de la imagen
let currentSlide = 0;
// Lista de imágenes
const images = ['imagen4.jpeg', 'imagen2.jpeg', 'imagen3.jpeg'];
// Descripciones correspondientes a las imágenes
const descriptions = ['Descripción de la imagen 1', 'Descripción de la imagen 2', 'Descripción de la imagen 3'];

// Función para mostrar la imagen y su descripción
function showImage() {
  document.getElementById('galleryImg').src = images[currentSlide];
  document.querySelector('.description').innerText = descriptions[currentSlide];
}

// Función para cambiar entre las imágenes
function changeSlide(n) {
  currentSlide += n;
  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  } else if (currentSlide >= images.length) {
    currentSlide = 0;
  }
  showImage();
}

showImage(); // Mostrar la primera imagen al cargar la página