//Barra de Controles
function controle(itemclicado) {
    var container = itemclicado.closest('.itens');
    var controle = container.querySelector('.controle');
    const TodosControle = document.querySelectorAll(".controle");

    if (!controle.classList.contains('hide')) {
        controle.classList.add('hide')
    } else {
        TodosControle.forEach( (event) => {
            event.classList.add('hide')
        });
    
        controle.classList.remove('hide');
    }

    salvarNoLocalStorage();
};

//Deletar Item
function removerItem(itemclicado) {

    //preco
    var item = itemclicado.parentNode.parentNode;
    var preco = item.getAttribute("valor");
    if (preco === "2xs") {
        precoTotal -= 0;
    } else if (preco === "xs") {
        precoTotal -= 30;
    } else if (preco === "s") {
        precoTotal -= 40;
    } else if (preco === "m") {
        precoTotal -= 60;
    } else if (preco === "l") {
        precoTotal -= 100;
    } else if (preco === "xl") {
        precoTotal -= 700;
    } else {
        precoTotal = "erro";
    }
    atualizaPreco()

    itemclicado.closest('.itens').remove();

    salvarNoLocalStorage();
};

//Mover Item Para Cima
function moverCima(itemclicado) {
    var construcao = document.querySelector('.construcao');
    var container = itemclicado.closest('.itens');
    
    if (container.previousElementSibling) {
      construcao.insertBefore(container, container.previousElementSibling);
    }

    salvarNoLocalStorage();
};

//Mover Item Para Baixo
function moverBaixo(itemclicado) {
    var construcao = document.querySelector('.construcao');
    var container = itemclicado.closest('.itens');
  
    if (container.nextElementSibling) {
      construcao.insertBefore(container.nextElementSibling, container);
    }

    salvarNoLocalStorage();
};