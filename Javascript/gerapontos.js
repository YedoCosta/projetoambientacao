function gerarPontos(){
   document.getElementById("pontos").innerHTML=  Math.random();;
    
    var login = window.sessionStorage.getItem('login');
    document.getElementById("login").innerHTML = login;
}