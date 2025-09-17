const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");
const triggers = document.querySelectorAll(".lightbox-trigger");

let currentIndex = 0; // índice de la imagen mostrada

// Función para mostrar imagen en índice dado
function showImage(index) {
  if (index < 0) index = triggers.length - 1; // bucle al final
  if (index >= triggers.length) index = 0;    // bucle al inicio
  currentIndex = index;
  lightboxContent.src = triggers[currentIndex].src;
  lightboxContent.alt = triggers[currentIndex].alt;
}

// Al hacer click en imagen de galería
triggers.forEach((trigger, index) => {
  trigger.addEventListener("click", () => {
    currentIndex = index;
    showImage(currentIndex);
    lightbox.style.display = "block";
  });
});

// Cerrar lightbox
lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Cerrar haciendo click fuera
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Botones siguiente/anterior
lightboxPrev.addEventListener("click", () => {
  showImage(currentIndex - 1);
});
lightboxNext.addEventListener("click", () => {
  showImage(currentIndex + 1);
});

// Navegación con flechas del teclado (opcional)
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "block") {
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
    if (e.key === "Escape") lightbox.style.display = "none";
  }
});
