let personagem = document.getElementById("personagem");
let coracao = document.getElementById("coracao");

personagem.addEventListener("mouseover", function() {
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);
  personagem.style.left = x + "px";
  personagem.style.top = y + "px";
});

coracao.addEventListener("click", function() {
  alert("Eu te amo!");
});
