var menuHamburguer = document.getElementById("iconeMenuHamburguer")
var menu = document.getElementById("menuHamburguer")
var menuFundo = document.getElementById("menuHamburguerFundo")

menuHamburguer.addEventListener('click', () => {
    if (menu.classList.contains('menuEntrandoMenuHamburguer')) {
        menu.classList.remove('menuEntrandoMenuHamburguer')
        menu.classList.add('menuSaindoMenuHamburguer')
        menuFundo.classList.remove('menuSaindoMenuHamburguer')
        menuFundo.classList.add('opacidadeBaixaMenuHamburguer')
        setTimeout(() => {
            menuFundo.classList.add('hide');
        }, 1000);
    } else {
        menuFundo.classList.remove('hide');
        menu.classList.remove('menuSaindoMenuHamburguer')
        menu.classList.add('menuEntrandoMenuHamburguer')
        menuFundo.classList.remove('opacidadeBaixaMenuHamburguer')
        menuFundo.classList.add('opacidadeAltaMenuHamburguer')
    };
})

menuFundo.addEventListener('click', () => {
    if (menu.classList.contains('menuEntrandoMenuHamburguer')) {
        menu.classList.remove('menuEntrandoMenuHamburguer')
        menu.classList.add('menuSaindoMenuHamburguer')
        menuFundo.classList.remove('menuSaindoMenuHamburguer')
        menuFundo.classList.add('opacidadeBaixaMenuHamburguer')
        setTimeout(() => {
            menuFundo.classList.add('hide');
        }, 1000);
    }
})