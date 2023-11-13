const container = document.querySelector(".container");

window.addEventListener("scroll", () => {
  const opacity = 1 - window.scrollY / container.offsetHeight * 1.5;

  container.style.opacity = opacity;
});

window.addEventListener("click", () => {
  container.style.color = "red";
})
