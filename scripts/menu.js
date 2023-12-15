var cabecalhoTitle = document.getElementById('cabecalhoTitle');
var secoesTitle = document.getElementById('secoesTitle');
var rodapeTitle = document.getElementById('rodapeTitle');

var cabecalho = document.getElementById('cabecalho');
var secoes = document.getElementById('secoes');
var rodape = document.getElementById('rodape');

var arrow = document.getElementById('arrow');


cabecalhoTitle.addEventListener('click', () => {
    if (cabecalho.classList.contains('menuEntering')) {
        cabecalho.classList.remove('menuEntering')
        cabecalho.classList.add('menuLeaving')
        setTimeout(() => {
            cabecalho.classList.toggle('hide'); 
        }, 1000);
    } else {
        cabecalho.classList.remove('menuLeaving')
        cabecalho.classList.add('menuEntering')
        cabecalho.classList.remove('hide')
        secoes.classList.toggle('menuLeaving')
    };
    if (secoes.classList.contains('menuEntering')) {
        secoes.classList.remove('menuEntering')
        secoes.classList.add('menuLeaving')
        setTimeout(() => {
            secoes.classList.toggle('hide'); 
        }, 1000);
    };
    if (rodape.classList.contains('menuEntering')) {
        rodape.classList.remove('menuEntering')
        rodape.classList.add('menuLeaving')
        setTimeout(() => {
            rodape.classList.toggle('hide'); 
        }, 1000);
    };
});

secoesTitle.addEventListener('click', () => {
    if (secoes.classList.contains('menuEntering')) {
        secoes.classList.remove('menuEntering')
        secoes.classList.add('menuLeaving')
        setTimeout(() => {
            secoes.classList.toggle('hide'); 
        }, 1000);
    } else {
        secoes.classList.remove('menuLeaving')
        secoes.classList.add('menuEntering')
        secoes.classList.toggle('hide')
    };
    if (cabecalho.classList.contains('menuEntering')) {
        cabecalho.classList.remove('menuEntering')
        cabecalho.classList.add('menuLeaving')
        setTimeout(() => {
            cabecalho.classList.toggle('hide'); 
        }, 1000);
    };
    if (rodape.classList.contains('menuEntering')) {
        rodape.classList.remove('menuEntering')
        rodape.classList.add('menuLeaving')
        setTimeout(() => {
            rodape.classList.toggle('hide'); 
        }, 1000);
    };
});

rodapeTitle.addEventListener('click', () => {
    if (rodape.classList.contains('menuEntering')) {
        rodape.classList.remove('menuEntering')
        rodape.classList.add('menuLeaving')
        setTimeout(() => {
            rodape.classList.toggle('hide'); 
        }, 1000);
    } else {
        rodape.classList.remove('menuLeaving')
        rodape.classList.add('menuEntering')
        rodape.classList.toggle('hide')
    };
    if (cabecalho.classList.contains('menuEntering')) {
        cabecalho.classList.remove('menuEntering')
        cabecalho.classList.add('menuLeaving')
        setTimeout(() => {
            cabecalho.classList.toggle('hide'); 
        }, 1000);
    };
    if (secoes.classList.contains('menuEntering')) {
        secoes.classList.remove('menuEntering')
        secoes.classList.add('menuLeaving')
        setTimeout(() => {
            secoes.classList.toggle('hide'); 
        }, 1000);
    };
});

arrow.addEventListener('click', () => {
    if (cabecalho.classList.contains('menuEntering')) {
        cabecalho.classList.remove('menuEntering')
        cabecalho.classList.add('menuLeaving')
        setTimeout(() => {
            cabecalho.classList.toggle('hide'); 
        }, 1000);
    };
    if (secoes.classList.contains('menuEntering')) {
        secoes.classList.remove('menuEntering')
        secoes.classList.add('menuLeaving')
        setTimeout(() => {
            secoes.classList.toggle('hide'); 
        }, 1000);
    };
    if (rodape.classList.contains('menuEntering')) {
        rodape.classList.remove('menuEntering')
        rodape.classList.add('menuLeaving')
        setTimeout(() => {
            rodape.classList.toggle('hide'); 
        }, 1000);
    };
});