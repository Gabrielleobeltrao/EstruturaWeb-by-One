function atualizaPreco () {
    if (precoTotal <= 350) {
        document.getElementById("total").textContent = 350;
    } else {
        document.getElementById("total").textContent = precoTotal;
    }
};