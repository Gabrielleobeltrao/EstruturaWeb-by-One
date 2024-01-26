var precoTotal = 0;

function somaPreco(elemento) {
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

    atualizaPreco();
}

function atualizaPreco() {
    if (precoTotal <= 350) {
        document.getElementById("total").textContent = 350;
    } else {
        document.getElementById("total").textContent = precoTotal;
    }
}
