function altera()
{
    if(descricaoC != null){
        if (localStorage.meuArr){
            arr = JSON.parse(localStorage.getItem('meuArr'));
        }

        let novoItem = document.getElementById("descricaoC").value;
        arr.push(novoItem);
        document.getElementById("descricaoC").value = "";
        localStorage.meuArr = JSON.stringify(arr);
    }
}

function altera1()
{
    var email = document.getElementById("emailC");
    var password = document.getElementById("passwordC");
    var nome = document.getElementById("nomeC");
    var descricao = document.getElementById("descricaoC");

    var dados = JSON.parse(localStorage.getItem("cadastro"));

    var auxRegistro = {
        nome: nomeC.value,
        email: emailC.value,
        password: passwordC.value,
        descricao: descreicaoC.value
    };

    dados.push(auxRegistro);

    localStorage.setItem("cadastro", JSON.stringify(dados));
    alert("Perfil atualizado com sucesso!");
    
    window.location.href = "perfil.html";
}