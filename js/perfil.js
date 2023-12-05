function perfil()
{
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var nome = document.getElementById("nome");

    if(localStorage.login){
        dados = JSON.parse(localStorage.getItem("cadastro"));
    }
    for(var i in dados){
        if(email.value == dados[i].email && password.value == dados[i].password){
            localStorage.setItem("acesso", true);
    
            window.location.href = "home.html";
            inexistente = false;
        }
    }


}

