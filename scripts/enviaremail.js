function enviarEmail() {
    emailjs.init("UnO6d-tzu192X85yw");
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var conteudoConstrucao = document.getElementById("construcao").innerHTML;

    var templateParams = {
        nome: nome,
        telefone: telefone,
        email: email,
        conteudo: conteudoConstrucao
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