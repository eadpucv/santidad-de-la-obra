"use strict";
const marcos = document.querySelectorAll(".transcripcion");
const ajustar = marco => {
  const ancho = marco.clientWidth;
  if (ancho > 0) marco.style.setProperty("--escala", ancho / 880);
};
marcos.forEach(ajustar);
if ("ResizeObserver" in window) {
  const observador = new ResizeObserver(entradas => {
    for (const entrada of entradas) ajustar(entrada.target);
  });
  marcos.forEach(marco => observador.observe(marco));
} else {
  window.addEventListener("resize", () => marcos.forEach(ajustar));
}
