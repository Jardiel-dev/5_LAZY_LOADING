// Seleciona TODAS as imagens que estão dentro de .image-container
// O resultado é uma NodeList (parecido com um array)
const images = document.querySelectorAll(".image-container img");

// Cria um IntersectionObserver
// Ele serve para "observar" quando um elemento entra ou sai da tela (viewport)
const observer = new IntersectionObserver((entries, observer) => {

  // entries é uma lista de elementos observados com informações
  entries.forEach((entry) => {

    // entry.isIntersecting retorna true quando o elemento aparece na tela
    // Se a imagem AINDA NÃO estiver visível, a função para aqui
    if (!entry.isIntersecting) return;

    // entry.target é o elemento que está sendo observado (a imagem)
    const image = entry.target;

    // Aqui acontece o Lazy Load de verdade
    // O src da imagem é modificado para carregar uma versão maior
    image.src = image.src.replace("&w=10&", "&w=1000&");

    // Depois que a imagem já carregou, paramos de observá-la
    // Isso melhora a performance
    observer.unobserve(image);
  });
}, {
  // Objeto de configurações do IntersectionObserver
  // Está vazio, então usa os valores padrão:
  // root = viewport
  // threshold = 0
});


// Para cada imagem encontrada no início...
images.forEach((image) => {

  // Dizemos ao observer para começar a observar essa imagem
  observer.observe(image);
});
