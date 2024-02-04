// Passo 1
const botao = document.querySelector(".btn-plataforma");
console.log(botao);

// Passo 2

const elementosPlataformas = document.querySelector(".btn-plataforma .plataformas");

// Passo 3

botao.addEventListener("click", () => {

    //Parte 2

    elementosPlataformas.classList.toggle("ativo");
});

