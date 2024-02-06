var botaoCode = document.getElementById('botaoCode')
var botaoCodex = document.getElementById('botaoCodeX')

var secCodigo = document.getElementById('codigo')
var codigoBg = document.getElementById('codigoBg')
var codigoCard = document.getElementById('codigoCard')

botaoCode.addEventListener('click', () => {
    secCodigo.classList.remove('hide')
    codigoBg.classList.add('opacidadeAlta')
    codigoBg.classList.remove('opacidadeBaixa')
    codigoCard.classList.add('menuEntrando')
    codigoCard.classList.remove('menuSaindo')
})

botaoCodex.addEventListener('click', () => {
    codigoBg.classList.add('opacidadeBaixa')
    codigoBg.classList.remove('opacidadeAlta')
    codigoCard.classList.add('menuSaindo')
    codigoCard.classList.remove('menuEntrando')
    setTimeout(() => {
        secCodigo.classList.add('hide');
    }, 1000);

})

var botaoUsarCodigo = document.getElementById('usarCogigo')

botaoUsarCodigo.addEventListener('click', () => {
    buscarDivs();
});

function buscarDivs() {

    var divConstrucao = document.getElementById('construcao');
    var divsItem = divConstrucao.querySelectorAll('.itens');

    if (divsItem.length > 0) {
        divsItem.forEach(function(divItem) {
            divItem.closest('.itens').remove();;
        });
    }

    precoTotal = 0
    salvarNoLocalStorage()
    atualizaPreco()

    var idsDigitados = document.getElementById('textAreaCode').value.split(',');

    idsDigitados.forEach(function(id) {
        var divEncontrada = document.getElementById(id.trim());

        addItem(divEncontrada)

        // Animação
        codigoBg.classList.add('opacidadeBaixa')
        codigoBg.classList.remove('opacidadeAlta')
        codigoCard.classList.add('menuSaindo')
        codigoCard.classList.remove('menuEntrando')
        setTimeout(() => {
            secCodigo.classList.add('hide');
        }, 1000);

        menu.classList.remove('menuEntrandoMenuHamburguer')
        menu.classList.add('menuSaindoMenuHamburguer')
        menuFundo.classList.remove('menuSaindoMenuHamburguer')
        menuFundo.classList.add('opacidadeBaixaMenuHamburguer')
        setTimeout(() => {
            menuFundo.classList.add('hide');
        }, 1000);
    });

    var textarea = document.getElementById('textAreaCode');

    setTimeout(() => {
        textarea.value = '';
    }, 1000);
}