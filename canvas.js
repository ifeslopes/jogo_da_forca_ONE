function esconderjogo(){
document.querySelector(".classeTeclado").style.display = "none" ;
document.querySelector(".contener-jogo").style.display = "none" ;
}

function mostrajogo(){
document.querySelector(".classeTeclado").style.display = "block" ;
document.querySelector(".contener-jogo").style.display = "block" ;
}

function retornaNumeroAleatorio(palavras){
  return palavras[Math.floor(Math.random() * palavras.length)];
}