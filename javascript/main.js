document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");
  const arrow = document.getElementById("enter");

  arrow.addEventListener("click", () => {
    hero.classList.add("hidden");

    setTimeout(() => {
      hero.style.display = "none";
      document.body.style.overflow = "auto";
    }, 2000);
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // primera imagen visible
  showSlide(current);

  // cambia cada 4 segundos
  setInterval(nextSlide, 4000);
});

// scrollReveal

const imagen1 = document.getElementById('corazon');
// const imagen2 = document.getElementById('imagen2');

const cargarImagen = (entradas, observador) => {
	// console.log(entradas)
	// console.log(observador)

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		} else {
			entrada.target.classList.remove('visible');
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: "0px",
  threshold: 0.2 // con que se vea el 20% del elemento ya entra
});

observador.observe(imagen1);
// observador.observe(imagen2);

// countdown

// Fecha objetivo: 15 de noviembre de 2025 a las 00:00:00
const targetDate = new Date("Nov 15, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "🎉 ¡Llegó el gran día! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Ejecuta la primera vez
