var botaoCode = document.getElementById('botaoCode')
var botaoCodex = document.getElementById('botaoCodeX')

var secCodigo = document.getElementById('codigo')

botaoCode.addEventListener('click', () => {
    secCodigo.classList.remove('hide')
})

botaoCodex.addEventListener('click', () => {
    secCodigo.classList.add('hide')
})