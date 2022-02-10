const palavraE1 = document.querySelector("#word");
const letraErradaE1 = document.querySelector('#wrong-letter');
const playBtn = document.querySelector('#play-botton');
const poup = document.querySelector('#poup-conteiner');
const notificacao = document.querySelector('#conteiner-notificao');
const menssageFinal = document.querySelector('#messagem-final');

const parteFiguras = document.querySelectorAll('.parte-figura');

const botao = document.querySelector('#nova-palavra');

const palavras = ['aulura','oracle'];
let selecionarPalavra;
//adionar palavra 
botao.addEventListener("click", (event) =>{

  palavraAdionada = document.querySelector('#input-nova-palavra');
  
console.log(palavras);
 palavras.push(palavraAdionada.value.toLowerCase());
console.log(palavras);
  palavraAdionada.value = "";

});  


const letrasCorretas = [];
const letrasErradas = [];

const botaoInicia = document.querySelector('#iniciar-jogo');
//esconder jogo
esconderjogo();

//mostra jogo 
botaoInicia.addEventListener("click", (event) =>{
mostrajogo();
 iniciaJogo();
}) 

//inicia Jogo
function iniciaJogo(){
selecionarPalavra =retornaNumeroAleatorio(palavras);

const son = play();


// mostra palavra escondida
function exibirPalavra() {
  
  palavraE1.innerHTML = `
  ${selecionarPalavra.split('')
  .map(
    letra =>`
    <span class ="letter">
    ${
    letrasCorretas.includes(letra)? letra: ''}
    </span>
    `
  )
  .join(' ')}
  `;

  const  palavraInterna =
  palavraE1.innerText.replace(/\n/g, '');

  if (palavraInterna === selecionarPalavra) {
    menssageFinal.innerText = "Parabéns você venceu!";
    poup.style.display = "flex";
    son.pause();
    vitoria();
  }
}

//atualização de letras errada
function atualuzarErrodeLetras() {
  //exibir erros nas letras
  letraErradaE1.innerHTML = `
  ${letrasErradas.length > 0 ? '<p class="erro">Letras Erradas!!</p>': ''}
  ${letrasErradas.map(letra => `<span class="letraErro" >${letra} </span>`)}
  `;
  //Exibir partes
  parteFiguras.forEach((part, index) => {
    const erros = letrasErradas.length;
    if (index < erros) {
      part.style.display = "block";
    } else
    {
      part.style.display = "none";
    }
  });
  //checar se perdeu
  if (letrasErradas.length === parteFiguras.length) {
    menssageFinal.innerText = 'Você perdeu';
    poup.style.display = 'flex';
    son.pause();
    derrota();
  }
}

//mostrar notificação
function mostraNotificacao() {
  notificacao.classList.add('show')
  setTimeout(()=> {
    notificacao.classList.remove('show')
  }, 2300);
}

var botoes = document.querySelector ('#teclado').getElementsByTagName('input');
for (var i = 0; i < botoes.length; i++) {


  botoes[i].onclick = function() {

    
    testeLetra(this.value)

  }
} 
//letras presionadas
function testeLetra(letra1) {
  const letra = letra1;

  if (selecionarPalavra.includes(letra)) {
    if (!letrasCorretas.includes(letra)) {
      letrasCorretas.push(letra);
      exibirPalavra();
      acerto();
    } else {
      mostraNotificacao();
    }
  } else {
    if (!letrasErradas.includes(letra)) {
      letrasErradas.push(letra);
      atualuzarErrodeLetras();
      erro();
    } else {
      mostraNotificacao();
    }
  }
};

//restar game
playBtn.addEventListener('click', ()=> {
letrasCorretas.splice(0);
letrasErradas.splice(0);

selecionarPalavra = retornaNumeroAleatorio(palavras);

exibirPalavra();
atualuzarErrodeLetras();
poup.style.display = 'none';
son.play();
});
exibirPalavra();
} 
