// Selecionar todos os cards
let cards = document.querySelectorAll(".card-destino");
 
/* Percorrer todos os cards selecionados e para cada um (separadamente)
pegar os botões (botão curiosidade e o botão favoritos)*/
cards.forEach(function (card) {
    let botaoCuriosidade = card.querySelector('.botao-curiosidade');
    let botaoFavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');
 
    botaoCuriosidade.addEventListener("click", function () {
        if (curiosidade.hidden) {
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute("aria-expanded", "true");
            botaoCuriosidade.textContent = "Ocultar curiosidades"
        } else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute("aria-expanded", "true");
            botaoCuriosidade.textContent = "Ver curiosidades"
        }
    }); // fechamento do código do botaoCuriosidade
 
    botaoFavorito.addEventListener("click", function () {
        // Aplicar/Remover a classe 'favorito'
        // Classe foi aplicada? true
        // Classe foi removida? false
        let favoritado = card.classList.toggle('favoritado');
 
        // Atualizar o estado do botão (aria-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado);
 
        // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)
        if (favoritado) {
            botaoFavorito.textContent = "★ Favoritado";
        } else {
            botaoFavorito.textContent = "☆ Favoritar";
        }
        // Chama a função de atualização
        atualizarContadorFavoritos()
 
    }); // fechamento do botão favorito
}); // fechamento do forEach
 
/* V2: programação para o recurso de filtragem de destinos*/
 
// Procurar e selecionar os botões de filtro
const botoesFiltro = document.querySelectorAll("[data-filtro]");
 
// Percorrer/acessar cada botão dentro do botoesFiltro
botoesFiltro.forEach(function (botaoFiltro) {
 
    // Quando acontecer o clique do botão...
    botaoFiltro.addEventListener("click", function () {
        // ... acessamos e guardamos o filtro escolhido
        const filtro = botaoFiltro.dataset.filtro;
 
        // Percorrendo cada card...
        cards.forEach(function (card) {
            // ... e guardando a categoria de cada um
            const categoria = card.dataset.categoria;
 
            // Se o valor de filtro for "todos" OU se a categoria for igual ao filtro
            if (filtro === "todos" || categoria === filtro) {
                // Então mostramos o card
                card.hidden = false;
            }
            else {
                // Senão, escondemos o card
                card.hidden = true;
            }
        }); // fechamento forEach dos cards
 
        // Para cada botão de filtro...
        botoesFiltro.forEach(function (botaoFiltro) {
            // Verificamos se o botão atual que foi clicado é o mesmo do filtro
            if (botaoFiltro.dataset.filtro === filtro) {
                // Se for, adicionamos a classe nele
                botaoFiltro.classList.add("filtro-ativo");
 
                // E mudamos o estado para pressionado/ativado (true)
                botaoFiltro.setAttribute("aria-pressed", "true");
            }
            else {
                // Senão, retiramos a classe dele
                botaoFiltro.classList.remove("filtro-ativo");
 
                // E mudamos o estado para não-pressionado/desativado (false)
                botaoFiltro.setAttribute("aria-pressed", "false");
            }
        }); // fechamento forEach botoesFiltro
 
    }) // fechamento event listener
 
 
}); // fechamento forEach dos botões
 
// selecionando os elementos que serão manipulados
 
//Botão do Menu
const botaoMenu = document.querySelector(".botao-menu");
 
 
//Navegação principal
const navegacaoPrincipal = document.querySelector("#navegacao-principal");
 
//Detectando o acionamento do botão
botaoMenu.addEventListener("click", function () {
    //Ao clicar no botaoMenu, o JS deve aplicar ou remover a classe "menu-aberto"
    //Classe aplicada? true
    //Classe removida? false
    const menuAberto = navegacaoPrincipal.classList.toggle("menu-aberto");
 
    //Atualizar o estado do botão usando aria-expanded
    botaoMenu.setAttribute("aria-expanded", menuAberto);
 
    if(menuAberto){
        botaoMenu.textContent = "✖ Fechar";
    } else{
        /* Se o menu estiver fechado, mostre o botão ☰ Menu */
        botaoMenu.textContent = "☰ Menu"
    }
   
});
 
/* versao4: script para contagem de favoritos*/
 
// Selecionando o elemento que apresenta a quantidade de favorito
const quantidadeFavoritos = document.querySelector("#quantidade-favoritos");
 
// Função para atualização dos favoritos
function atualizarContadorFavoritos(){
 
    // Guardar em memória a contagem, começando em zero
    let quantidade = 0;
 
    // Percorrer todos os cards, inclusive os ocultos pelos filtros
    cards.forEach(function(card){
        // Verificar se o card possuí a classe "favoritado"
        if(card.classList.contains("favoritado")){
            // Se possuir, incrementamos (++) a variável quantidade
            // incrementar significa adicionar 1
            quantidade++;
        }
    }); // Final forEach
 
    // Após a contagem, atualiza o número exibido no span HTML
    quantidadeFavoritos.textContent = quantidade;
 
} // Final da função atualizarContadorFavoritos
 
/* Versão 5: curiosidades aleatórias */
const tituloCuriosiadeAleatoria = document.querySelector("#titulo-curiosidade-aleatoria");
 
const explicacaoCuriosidadeAleatoria = document.querySelector ("#explicacao-curiosidade-aleatoria");
 
const botaoCuriosidadeAleatoria = document.querySelector(".botao-curiosidade-aleatoria");
 
const curiosidadesUniverso = [
  {
    titulo: "A luz do Sol não chega instantaneamente à Terra",
    explicacao: "A luz viaja pelo espaço e leva cerca de 8 minutos para chegar até nós."
  },
  {
    titulo: "Em Vênus, um dia é mais longo que um ano",
    explicacao: "Vênus leva cerca de 243 dias terrestres para girar uma vez em torno do próprio eixo e cerca de 225 dias para completar uma órbita ao redor do Sol."
  },
  {
    titulo: "Marte tem duas luas pequenas",
    explicacao: "As luas de Marte se chamam Fobos e Deimos. Elas têm formas irregulares, diferentes da forma quase esférica da Lua da Terra."
  },
  {
    titulo: "Júpiter tem uma tempestade gigante",
    explicacao: "A Grande Mancha Vermelha é uma enorme tempestade na atmosfera de Júpiter. Ela é mais larga que a Terra e vem sendo observada há séculos."
  },
  {
    titulo: "Europa pode esconder um oceano",
    explicacao: "A lua Europa, de Júpiter, tem uma crosta de gelo. Observações indicam que pode haver um oceano de água líquida sob essa superfície."
  },
  {
    titulo: "Uma lua de Júpiter é maior que Mercúrio",
    explicacao: "Ganimedes é a maior lua do Sistema Solar. Seu diâmetro é maior que o do planeta Mercúrio."
  },
  {
    titulo: "Os anéis de Saturno são feitos de muitos fragmentos",
    explicacao: "Eles contêm bilhões de pedaços de gelo e rocha, desde grãos muito pequenos até blocos enormes."
  },
  {
    titulo: "A Lua mantém quase sempre a mesma face voltada para a Terra",
    explicacao: "A Lua leva praticamente o mesmo tempo para girar em torno de si e para dar uma volta ao redor da Terra. Por isso, vemos quase sempre o mesmo hemisfério."
  },
  {
    titulo: "Mercúrio pode ter gelo em crateras escuras",
    explicacao: "Em crateras profundas próximas aos polos, há regiões que nunca recebem luz solar direta. Essas áreas podem conservar gelo de água apesar do calor em outras partes do planeta."
  },
  {
    titulo: "O Sol também se move pela galáxia",
    explicacao: "O Sol e seu sistema planetário orbitam o centro da Via Láctea. Uma volta completa leva cerca de 230 milhões de anos terrestres."
  },
  {
    titulo: "A Via Láctea é uma galáxia espiral barrada",
    explicacao: "Ela tem uma região central alongada, em forma de barra, e braços espirais. O Sistema Solar fica numa região chamada Braço de Órion."
  },
  {
    titulo: "Há planetas que orbitam duas estrelas",
    explicacao: "Alguns exoplanetas, que são planetas fora do Sistema Solar, orbitam um par de estrelas em vez de uma estrela só."
  }
];
 
console.log(curiosidadesUniverso);
 
function exibirCuriosidadeAleatoria(){
    // curiosidadesUniverso.length -> quantidade de dados na lista
    // Math.random () -> gera valores aleatórios entre 0 e 1
    //Math.floor() -> arredonda pra baixo
    const indiceAleatorio = Math.floor(Math.random() * curiosidadesUniverso.length);
    console.log(indiceAleatorio);

    // Acessando/guardando a curiosidade pelo índice aleatorio (0, 1 ou 2) 
    const curiosidadeEscolhida = curiosidadesUniverso[indiceAleatorio]

    //exibindo o titulo da curiosidade escolhida no h3
    tituloCuriosiadeAleatoria.textContent = curiosidadeEscolhida.titulo;

    // Exibindo a explicação da curiosidade escolhida no p
    explicacaoCuriosidadeAleatoria.textContent = curiosidadeEscolhida.explicacao;
 
}


// Chamamos a mesma função também quando clicar no botão
botaoCuriosidadeAleatoria.addEventListener("click", exibirCuriosidadeAleatoria);
 
// Chamar a fução de forma automática no momento da entrada no site
exibirCuriosidadeAleatoria();
 
 