window.addEventListener('load', carregarDoLocalStorage);

function salvarNoLocalStorage() {
    //Conteudo da Div
    var conteudoDivConstrucao = document.getElementById("construcao").innerHTML;

    localStorage.setItem('estruturaSite', conteudoDivConstrucao);

    //Preco Total do Site
    localStorage.setItem('precoTotal', precoTotal.toString());
}

function carregarDoLocalStorage() {
    //Conteudo da Div
    var estruturaSiteSalvo = localStorage.getItem('estruturaSite');

    if (estruturaSiteSalvo) {
        document.getElementById("construcao").innerHTML = estruturaSiteSalvo;
    }

    //Preco Total do Site
    var precoTotalSalvo = Number(localStorage.getItem('precoTotal'));

    if (precoTotalSalvo) {
        precoTotal = precoTotalSalvo;
    }

    atualizaPreco ()
}