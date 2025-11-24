const Arriba = document.getElementById("Arriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    Arriba.style.display = "block";
  } else {
    Arriba.style.display = "none";
  }
});

Arriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});