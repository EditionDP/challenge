e --> enter 
i --> imes 
o --> ober 
a --> ai
u --> ufat
enter --> e 
imes --> i 
ober --> o 
ai --> a
ufat --> u

/*Funcion para el proceso de cambio de vocales por palabra*/
function encriptar(){
    var texto = document.getElementById("textoin").value.toLowerCase();
    var cifrado = texto.replace(/e/igm,"enter");
    var cifrado = cifrado.replace(/o/igm,"ober");
    var cifrado = cifrado.replace(/i/igm,"imes");
    var cifrado = cifrado.replace(/a/igm,"ai");
    var cifrado = cifrado.replace(/u/igm,"ufat");

    
    document.getElementById("tittle2").style.display = "none";
    document.getElementById("tittle3").innerHTML = cifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"; 
    

    
}
/*Funcion para el proceso de cambio de palabra por vocal*/
function desencriptar() {
    var texto = document.getElementById("textoin2").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

   
    document.getElementById("tittle2").style.display = "none";
    document.getElementById("tittle3").innerHTML = txtcifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"; 

    
}
 /*Funcion para el boton copiar*/
function copy(){
    var  boton = document.querySelector("#tittle3");
    boton.select();
    document.execCommand("copy");
    

}

