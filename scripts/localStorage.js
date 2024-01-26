window.addEventListener('load', carregarDoLocalStorage);

function salvarNoLocalStorage() {
    var conteudoDivConstrucao = document.getElementById("construcao").innerHTML;

    localStorage.setItem('estruturaSite', conteudoDivConstrucao);

    // Preco Total do Site
    if (!isNaN(precoTotal)) {
        localStorage.setItem('precoTotal', precoTotal.toString());
    }
}

function carregarDoLocalStorage() {
    var estruturaSiteSalvo = localStorage.getItem('estruturaSite');

    if (estruturaSiteSalvo) {
        document.getElementById("construcao").innerHTML = estruturaSiteSalvo;
    }

    // Preco Total do Site
    var precoTotalSalvo = parseFloat(localStorage.getItem('precoTotal'));

    if (!isNaN(precoTotalSalvo)) {
        precoTotal = precoTotalSalvo;
    }

    atualizaPreco();
}
