// Selecionar todos os cards
let cards = document.querySelectorAll(".card-destino");
 
/* Percorrer todos os cards selecionados e para cada um (separadamente)
pegar os botões (botão curiosidade e o botão favoritos)*/
cards.forEach(function(card){
    console.log(card);
   
    let botaoCuriosidade = document.querySelector('.botao-curiosidade');
    let botaoFavorito = document.querySelector('.botao-favorito');
    let curiosidade = document.querySelector('.curiosidade');
 
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
// Procurar e selecionar os botões de filtro
const botoesFiltro = document.querySelectorAll("[data-filtro]");
 
// Percorrer/acessar cada botão dentro do botoesFiltro
botoesFiltro.forEach (function(botaoFiltro){
 
    // Quando acontecer o clique no botão...
    botaoFiltro.addEventListener("click", function(){
        // ... acessamos e guardamos o filtro escolhido
        const filtro = botaoFiltro.dataset.filtro;
 
        // Percorrendo cada card...
        cards.forEach(function(card){
            // ... e guardando a categoria de cada um
            const categoria = card.dataset.categoria;
 
            // Mostrar todos os cards OU apenas cada da categoria
            if(filtro === "todos" || categoria === filtro){
                // Então mostramos o card
                card.hidden = false;
            } else {
                // Senão, escondemos o card
                card.hidden = true;
            }
 
        }); //fechamento do forEach dos cards
 
        // Para cada botão de filtro...
        botoesFiltro.forEach(function(botaoFiltro){
            // Verificamos se o botao atual que foi clicado é o mesmo do filtro
            if(botaoFiltro.dataset.filtro === filtro){
                // Se for, adicionamos a classe nele
             botaoFiltro.classList.add("filtro-ativo");
 
            // E mudamos o estado para pressionado/ativado (true)
            botaoFiltro.setAttribute("aria-pressed", "true");
            } else {
                // Senão, retiramos a classe dele
                botaoFiltro.classList.remove("filtro-ativo");
           
                // E mudamos o estado para não-pressionado/desativado (false)
                botaoFiltro.setAttribute("aria-pressed", "false");
            }
        });
    }); // fechamento event listener
}); // fechamento forEach
 
 
/* Versão 3: script para o menu responsivo */
 
// Selecionando os elementos que serão manipulados
const botaoMenu = document.querySelector(".botao-menu");
 
// Navegação principal
const navegacaoPrincipal = document.querySelector(".navegacao-principal");
 
console.log(botaoMenu);
console.log(navegacaoPrincipal);

// detec tando o acionamento do botão

botaoMenu.addEventListener("click", function(){
    // Ao clicar no botaoMenu, o JS deve aplicar ou remover a classe "menu-aberto"
    // Classe aplicada? true
    // Classe aplicada? false

    const menuAberto = navegacaoPrincipal.classList.toggle("menu-aberto");

    //Atualizar o estado do botão usando aria-expanded
    botaoMenu.setAttribute("aria-expanded", menuAberto);

    /* EXERCICIO! */
    /* Se o menu estiver aberto, mostre no botão X fechar */
    /* Se o menu estiver errado, mostre no botão ☰ menu */
        if(menuAberto){
            botaoMenu.textContent = "✖ Fechar Menu";
        }else{
            botaoMenu.textContent = "☰ Menu"
        }
});