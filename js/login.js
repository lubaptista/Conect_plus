
function logar()
{
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var inexistente = true;

    if(localStorage.cadastro){
        dados = JSON.parse(localStorage.getItem("cadastro"));
    }
    for(var i in dados){
        if(email.value == dados[i].email && password.value == dados[i].password){
            localStorage.setItem("acesso", true);
    
            window.location.href = "home.html";
            inexistente = false;
        }
    }

    if(inexistente == true){
        alert("Usuário ou senha inválidos!");
    }

}
