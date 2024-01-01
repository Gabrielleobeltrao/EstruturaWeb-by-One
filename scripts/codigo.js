var botaoCode = document.getElementById('botaoCode')
var botaoCodex = document.getElementById('botaoCodeX')

var secCodigo = document.getElementById('codigo')

botaoCode.addEventListener('click', () => {
    secCodigo.classList.remove('hide')
})

botaoCodex.addEventListener('click', () => {
    secCodigo.classList.add('hide')
})



var botaoUsarCodigo = document.getElementById('usarCogigo')
var textareaCode = document.getElementById('textareaCode')

botaoUsarCodigo.addEventListener('click', () => {
    localStorage.setItem('estruturaSite', textareaCode.value);
    location.reload()
})