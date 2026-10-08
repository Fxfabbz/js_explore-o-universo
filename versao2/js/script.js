// Selecionar todos os cards
let cards = document.querySelectorAll(".card-destino");
 
/* Percorrer todos os cards selecionados e para cada um (separadamente)
pegar os botões (botão curiosidade e o botão favoritos)*/
cards.forEach(function(card){
    let botaoCuriosidade = card.querySelector('.botao-curiosidade');
    let botaoFavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');
 
    botaoCuriosidade.addEventListener("click", function(){
        if(curiosidade.hidden){
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute("aria-expanded", "true");
            botaoCuriosidade.textContent = "Ocultar curiosidades"
        } else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute("aria-expanded", "true");
            botaoCuriosidade.textContent = "Ver curiosidades"
        }
    });//fechamento do botão curiosidade

   botaoFavorito.addEventListener("click", function(){
        // Aplicar/Remover a classe "favoritado"
        let favoritado = card.classList.toggle("favoritado")
        //Atualizar o estado do botão (aria-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado)
        // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)
        if(favoritado){
            botaoFavorito.textContent = "★favoritado";
        }else{
            botaoFavorito.textContent = "☆favorito"
        }



   });// fechamento do botao favorito
    
});//fechamento do forEach
 


/* V2: programação para o recurso de filtragem de destinos */

// procurar e selecionar os botõe de filtro 
const  botoesFiltro = document.querySelectorAll("[data-filtro]")

// Percorrer/acessar cada botão dentro do botoes Filtro
botoesFiltro.forEach(function(botaoFiltro){
   
    // Quando acontecer clique no botão...
    botaoFiltro.addEventListener("click", function(){
     // ... acessamos e guardamos o filtro escolhido
    const filtro = botaoFiltro.dataset.filtro;
  
        cards.forEach(function(card){
            const categoria = card.dataset.categoria;
        
        // Mostrar todos os cards OU apenas os cards da categoria filtrada
        if(filtro === "todos" || categoria === filtro){
            // então mostramos o card
            card.hidden = false;
        } else {
            // Senão, escondemos o card
            card.hidden = true;
        }




        }); // fechamento do forEach dos cards

        botoesFiltro.forEach(function(botaoFiltro){
            if(botaoFiltro.dataset.filtro === filtro){
                // se for, adicionamos a classe nele
                botaoFiltro.classList.add("filtro-ativo");

                // E mudamos o estado para pressionado/ativado (true)
                botaoFiltro.setAttribute("aria-pressed", "true")
            } else {
                // senão, retiramos a classe dele
                botaoFiltro.classList.remove("filtro-ativo");

                // E mudamos o estado para não-pressionado/desativado (false)
                botaoFiltro.setAttribute("aria-pressed", "false")
            }
        });

    }); // fechamento event listener

}); // fechamento forEach e dos botões

