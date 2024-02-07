function checarCampos() {
    var inputNome = document.getElementById("nome");
    var inputTelefone = document.getElementById("telefone");
    var inputemail = document.getElementById("email");

    if (inputNome.value && inputTelefone.value && inputemail.value) {
        enviarEmail();

        var avisoSucesso = document.getElementById("formAvisoSucesso");
        var avisoErro = document.getElementById("formAvisoErro");

        avisoErro.classList.add("hide");

        avisoSucesso.classList.remove("hide");
        setTimeout(() => {
            avisoSucesso.classList.add("hide");
        }, 2000);
    } else {
        var avisoErro = document.getElementById("formAvisoErro");
        avisoErro.classList.remove("hide");
    }

}

function enviarEmail() {
    emailjs.init("UnO6d-tzu192X85yw");
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    
    var divConstrucao = document.getElementById("construcao");
    var elementosFilhos = divConstrucao.children;

    var ids = [];
    var idsformatadas = ids.join(", ");

    for (var i = 0; i < elementosFilhos.length; i++) {
        if (elementosFilhos[i].id) {
            ids.push(elementosFilhos[i].id);
        }
    }

    var idsformatadas = ids.join(", ");


    var templateParams = {
        nome: nome,
        telefone: telefone,
        email: email,
        conteudo: idsformatadas
    };

    var serviceID = "gmail_gabrielleoaus";
    var templateID = "novo_pedido_de_site";

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
        })
        .catch(function(error) {
            console.error('Erro ao enviar o e-mail:', error);
        });
}