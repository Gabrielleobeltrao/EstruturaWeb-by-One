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
        var preco = elemento.getAttribute("valor");
        if (preco === "2xs") {
            precoTotal += 0;
        } else if (preco === "xs") {
            precoTotal += 30;
        } else if (preco === "s") {
            precoTotal += 40;
        } else if (preco === "m") {
            precoTotal += 60;
        } else if (preco === "l") {
            precoTotal += 100;
        } else if (preco === "xl") {
            precoTotal += 700;
        } else {
            precoTotal = NaN;
        }
    });
    localStorage.setItem('precoTotal', precoTotal);

    location.reload();
})