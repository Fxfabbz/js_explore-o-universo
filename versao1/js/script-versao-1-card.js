//procure e selecione o elemento com a classe card-destino
//e guarde em uma varievel chamada primeirocard
let primeirocard = document.querySelector('.card-destino');

//procure e selecione o botão de curiosidade da lua
let botaoCuriosidade = document.querySelector(".botao-curiosidade");
console.log(botaoCuriosidade);

//procure e seleione o paragrafo com a curiosidade sobre a lua
let curiosidade = document.querySelector(".curiosidade");
console.log(curiosidade);

/* Monitore o clique no botão de curiosidade ésta oculta. 
se estiver, faça ficar visivel, mude o aria-expanded para true e troque o texto do botão para "ocultar curiosidade". */

botaoCuriosidade.addEventListener("click", function(){
    
    // Se curiosidade estiver oculto (hidden)
    if(curiosidade.hidden){
        curiosidade.hidden = false;

        // Mude o atributo aria-expanded para true
        botaoCuriosidade.setAttribute("aria-expanded", "true"); 

        // Troque o texto do botão para Ocultar curiosidade
        botaoCuriosidade,textContent = "Ocultar curiosidade"
    } else {
        curiosidade.hidden = true;
        botaoCuriosidade.setAttribute("aria-expanded", "false");
        botaoCuriosidade.textContent = "Ver curiosidades";
    }
});