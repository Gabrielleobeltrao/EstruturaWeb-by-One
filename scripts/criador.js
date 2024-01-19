document.querySelectorAll('.itens').forEach(function (item) {
    item.addEventListener('click', function() {
        addItem(this);
    });
});

//Criar Clone
function addItem(itemclicado) {
    var addItem = itemclicado.cloneNode(true);

    addItem.removeAttribute("onclick");
    addItem.classList.add('item');

    //preco
    somaPreco(itemclicado)

    addItem.children[0].setAttribute("onclick", "controle(this)");

    document.getElementById("construcao").appendChild(addItem);

    salvarNoLocalStorage();
}