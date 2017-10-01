var textonombre = document.getElementById("text_name");
var textoapelli = document.getElementById("text_apellido");
var boton = document.getElementById("send");
var textocorreo = document.getElementById("text_mail");

boton.addEventListener("click", enviar);

function enviar(){
document.write("Bienvenido  " + textonombre.value +" "+ textoapelli.value +"<br>"+ " Te enviaremos correos a " + "<b>" +textocorreo.value+"</b>");
}
