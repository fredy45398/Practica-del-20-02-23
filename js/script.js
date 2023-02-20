/*Variables globales*/

/* Valor numericos --> Texto entero 123 - 123.12 - 546456.123123 */
/* Valor strings --> caracter 'X' , cadenas "XXXXXXXX" */

var textoPrincipal = "";

/* Metodos */

function CapturarValor(){
    /*let caracter1 = 'H';
    let caracter2 = 'O';
    let caracter3 = 'L';
    let caracter4 = 'A';
    textoPrincipal =  caracter1 + caracter2 + caracter3 + caracter4;
    alert(textoPrincipal);*/
    let cadenaCapturada = document.getElementById("txtCaptura").value;
    document.getElementById("lblCaptura").innerHTML = cadenaCapturada;
}

function CantidadCaracteres(){
    let cadenaCapturada = document.getElementById("txtCaptura").value;
    textoPrincipal = cadenaCapturada.length;
    document.getElementById("lblLength").innerHTML = textoPrincipal;
}

function CortarSlice(){
    let cadenaCapturada = document.getElementById("txtCaptura").value;
    textoPrincipal = cadenaCapturada.slice(1,6);
    document.getElementById("lblSlice").innerHTML = textoPrincipal;
}

function CortarSubstring(){
    let cadenaCapturada = document.getElementById("txtCaptura").value;
    textoPrincipal = cadenaCapturada.substring(3,9);
    document.getElementById("lblSubstring").innerHTML = textoPrincipal;
}

function CortarSubstr(){
    let cadenaCapturada = document.getElementById("txtCaptura").value;
    textoPrincipal = cadenaCapturada.substr(3,2);
    document.getElementById("lblSubstr").innerHTML = textoPrincipal;
}

function Reemplzar(){
    let cadenaCapturada = document.getElementById("txtCaptura").value;
    textoPrincipal = cadenaCapturada.replace("AX", "AM");
    document.getElementById("lblReplace").innerHTML = textoPrincipal;
}
function LimpiarTexto(){
    let cadenaCapturada = document.getElementById("txtCaptura").value;
    //textoPrincipal = cadenaCapturada.trimStar();
    textoPrincipal = cadenaCapturada.trim();
    document.getElementById("lblTrim").innerHTML = textoPrincipal;
}
function ConcatenarTexto(){
    let cadenaCapturada = document.getElementById("txtCaptura").value;
    let saludo = "Hola";
    textoPrincipal = cadenaCapturada.concat(" ", saludo);
    //textoPrincipal = cadenaCapturada.concat + " " + saludo;
    document.getElementById("lblConcat").innerHTML = textoPrincipal;
}

function Array() {
    let matrix = [];

    let roco = {
        tipoAnimal:"Perro",
        color:"negro",
        colorOjos:"Verdes",
        comida: function() {
            return "Roco come 3 KG de carne al dia";
            
        }
    }
    
}


function Procesar(){
    
    let cadenaCapturada = document.getElementById("txtCaptura").value;
    let saludo = "00000000";

    textoPrincipal01 = saludo + cadenaCapturada.replaceAll(" ","");
    textoPrincipal02 = textoPrincipal01.substring(cadenaCapturada.length,textoPrincipal01.length);
    document.getElementById("lblConcat").innerHTML = textoPrincipal02;
}