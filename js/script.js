                
                
                /* SESSÃO PRINCIPAL E PROJETOS */
 
const toogleBTN = document.querySelector(".menu-toggle")
const links = document.querySelector(".links")

toogleBTN.addEventListener("click", ()=>{
  links.classList.toggle("ativo")
});


const cards =document.querySelectorAll('.card-projetos');

const animarCards = () =>{
  cards.forEach(card =>{
  const posicao = card.getBoundingClientRect().top;
  const altura = window.innerHeight * 0.85;
  if(posicao < altura ){
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)'
  }
})
}

window.addEventListener('scroll', animarCards);
window.addEventListener('load', animarCards)



                /* SESSÃO CARROSSEL */

document.addEventListener('DOMContentLoaded', () => {
  const feedbacks = document.querySelector('.feedbacks');
  const carrossel = document.querySelector('.carrossel-container');
  const anteriorBtn = document.querySelector('.anterior');
  const proximoBtn = document.querySelector('.proximo');
  const imagens = document.querySelectorAll('.catia-gostosa img');

  function checkVisibility() {
    const rect = feedbacks.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.8) {
      feedbacks.classList.add('mostrar');
      carrossel.classList.add('mostrar');
      anteriorBtn.classList.add('mostrar');
      proximoBtn.classList.add('mostrar');

      imagens.forEach((img, index) => {
        setTimeout(() => {
          img.classList.add('mostrar');
        }, index * 150);
      });
    }
  }

  checkVisibility();
  window.addEventListener('scroll', checkVisibility);

  // CARROSSEL corrigido:
  const carrosselContainer = document.querySelector('.catia-gostosa');
  const larguraItem = imagens[0].offsetWidth + 18;
  const viewport = document.querySelector('.carrossel-viewport');
  const viewportWidth = viewport.offsetWidth;
  const imagensVisiveis = Math.floor(viewportWidth / larguraItem);
  let posicaoAtual = 0;
  const maxPosicao = -(larguraItem * (imagens.length - imagensVisiveis));

  proximoBtn.addEventListener('click', () => {
    if (posicaoAtual > maxPosicao) {
      posicaoAtual -= larguraItem;
    } else {
      posicaoAtual = 0; // volta pro começo
    }
    carrosselContainer.style.transform = `translateX(${posicaoAtual}px)`;
  });

  anteriorBtn.addEventListener('click', () => {
    if (posicaoAtual < 0) {
      posicaoAtual += larguraItem;
    } else {
      posicaoAtual = maxPosicao; // vai pro final
    }
    carrosselContainer.style.transform = `translateX(${posicaoAtual}px)`;
  });
});



                /* SESSÃO historia */

document.addEventListener('DOMContentLoaded', () => {
  const historiaSection = document.querySelector('#historia');

  function checkHistoriaVisibility() {
    const rect = historiaSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.96) {
      historiaSection.classList.add('mostrar');
      historiaSection.classList.remove('escondido');
      // Remove o listener corretamente
      window.removeEventListener('scroll', checkHistoriaVisibility);
    }
  }

  window.addEventListener('scroll', checkHistoriaVisibility);

  // Também chama ao carregar, para caso já esteja visível
  checkHistoriaVisibility();
});






document.addEventListener('DOMContentLoaded', () => {
  const historiaSection = document.querySelector('#historia');
  const containerHistoria = document.querySelector('.container-historia');
  const subtitulo = document.querySelector('#subtitulo-digitando');
  const textoSubtitulo = 'Conheça a nossa história de tradição e inovação.';
  let digitou = false; // pra não repetir se o usuário rolar pra cima e descer de novo

  function animarHistoria() {
    const rect = historiaSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.8 && !digitou) {
      containerHistoria.classList.add('mostrar');
      containerHistoria.classList.remove('escondido');
      escreverTexto();
      digitou = true;
    }
  }

  function escreverTexto() {
    let index = 0;
    subtitulo.style.animation = 'blink 0.7s step-end infinite'; // ativa cursor piscando

    const interval = setInterval(() => {
      subtitulo.textContent = textoSubtitulo.substring(0, index);
      index++;
      if (index > textoSubtitulo.length) {
        clearInterval(interval);
        subtitulo.style.borderRight = 'none'; // tira o cursor depois que termina
      }
    }, 60); // velocidade da digitação (pode ajustar, maior = mais lento)
  }

  window.addEventListener('scroll', animarHistoria);
  animarHistoria(); // chama no load também
});


/* CONTATO */



const form = document.getElementById('formContato');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Substitua pelo seu número WhatsApp no formato internacional (exemplo: 5521999999999)
  const numeroWhatsApp = '552196764-8217';

  const textoMensagem = `Olá! Meu nome é ${nome}, Gostaria de solicitar um orçamento: ${mensagem}`;
  const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(textoMensagem)}`;

  window.open(url, '_blank');
});