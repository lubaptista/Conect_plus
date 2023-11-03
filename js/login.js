function logar()
{
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if(email.value == "teste@teste.com" && password.value == "1234"){
        localStorage.setItem("acesso", true);

        window.location.href = "home.html";
    }else{
        alert("Usuário ou senha inválidos!");
    }

}