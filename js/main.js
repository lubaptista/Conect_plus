
function cadastrar(){
    var nomeC = document.getElementById("nomeC");
    var emailC = document.getElementById("emailC");
    var passwordC = document.getElementById("passwordC");

    var dados = JSON.parse(localStorage.getItem("cadastro"));

    if(dados == null){
        localStorage.setItem("cadastro", "[]");
        dados = [];
    }

    var auxRegistro = {
        nome: nomeC.value,
        email: emailC.value,
        password: passwordC.value
    };

    dados.push(auxRegistro);

    localStorage.setItem("cadastro", JSON.stringify(dados));
    alert("Cadastro realizado com sucesso!");

    window.location.href = "index.html";
}
