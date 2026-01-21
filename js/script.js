const images = document.querySelectorAll(".image-container img");

const observerOptions = {
  root: null,
  rootMargin: "0px 0px 300px 0px", // Carrega a imagem 300px antes dela aparecer
  threshold: 0
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target;

      // Substitui o parâmetro de largura baixa (10) por alta (1000)
      const highResSrc = image.src.replace("&w=10&", "&w=1000&");
      image.src = highResSrc;

      // Quando a imagem terminar de baixar, removemos o blur via CSS
      image.onload = () => {
        image.classList.add("loaded");
      };

      // Para de observar para economizar recursos
      observer.unobserve(image);
    }
  });
}, observerOptions);

images.forEach((image) => {
  observer.observe(image);
});