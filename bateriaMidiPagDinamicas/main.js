// essa estrutura que realiza o toque dos audios corretamente
function tocaSom (seletorElemento) {
   
    const elemento = document.querySelector(seletorElemento);


    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('ERRO! ELEMENTO NÃO LOCALIZADO OU SELETOR INVALIDO')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  
    const tecla = listaDeTeclas[contador]

    const instru = tecla.classList[1];

    const idAudio = `#som_${instru}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
// para deixar o botao vermelho quando pressionar 'enter' ou 'space' do teclado. e tambem para remover o efeito vermelho.
    
tecla.onkeydown = function(evento) {
    
        if (evento.code === 'Enter' || evento.code === 'Space') {
        tecla.classList.add('ativa')
        }
        
    }
    
    tecla.onkeyup = function() {
            tecla.classList.remove('ativa');
            }

        
    }



