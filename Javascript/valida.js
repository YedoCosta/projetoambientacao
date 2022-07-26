/*
A função é um trecho do codigo (algoritimo) 
*/
function validar(){
    // declaração de variável
    // O tipo é implicito 
    // JS é fracamente tipada
    var login;
    var senha;
    // Pegar o elemento - Elemento é a <tag>
    login = document.getElementById("login").value;
    senha = document.getElementById("senha").value;
    if(login === ''){
        alert("login obrigatorio");
        return false;
    } else if(senha === ''){
        alert("senha obrigatoria");
        return false;
    }else{
        return true;
    }

}