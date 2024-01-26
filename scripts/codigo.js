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
    var textAreaCode = document.getElementById('textAreaCode')
    localStorage.setItem('estruturaSite', textAreaCode.value);

    carregarDoLocalStorage()

    var divConstrucao = document.getElementById('construcao');
    var precos = divConstrucao.querySelectorAll('[valor]');

    precoTotal = 0

    precos.forEach(function(elemento) {
        somaPreco(elemento);
    });

    localStorage.setItem('precoTotal', precoTotal);
    location.reload();
})