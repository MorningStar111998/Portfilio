const imageContainers = document.querySelectorAll(".image-container");

imageContainers.forEach((container) => {
  const overlay = container.querySelector(".overlay");

  container.addEventListener("mouseenter", () => {
    overlay.style.opacity = "1";
  });

  container.addEventListener("mouseleave", () => {
    overlay.style.opacity = "0";
  });
});
