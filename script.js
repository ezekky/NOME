// Efeito ao rolar a página

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(11, 16, 32, 0.95)";
  } else {
    header.style.background = "rgba(11, 16, 32, 0.7)";
  }
});

// Animação simples nos cards

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Botões

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Botão clicado!");
  });
});
