// Palabra oculta
const palabraSecreta = "programadores";
// Letras de la palabra oculta
var palabra = ["p", "r", "o", "g", "r", "a", "m", "a", "d", "o", "r", "e", "s"];
// Letras que se guardan al ser ingresadas por el input
var letrasIngresadas = [];
// Contador de letras adivinadas
contador = 0;
// Contador de intentos
contadorInt = 10;
// Imagen 1
//var image1 = document.getElementById('image1');
// Imagen 2
//var image2 = document.getElementById('image2');


// Comprueba lo que sucede al presionar el botón
function verific() {
  var letras = document.getElementById("letra").value;
  var soloLetras = /^[a-z]+$/;

  if (letras.length > 1) {
    alert("¡INGRESE UNA SOLA LETRA!");
    return false;
  }
  if (letras.match(soloLetras)) {
    if (palabra.includes(letras)) {
      letrasIngresadas.push(letras);
      sacarLetra();
      if (letras === "p") {
        palabra.splice(0, 1, 0);
        contador++;
        document.getElementById("P").innerHTML = "p";
      }
      if (letras === "r") {
        palabra.splice(1, 1, 0);
        palabra.splice(4, 1, 0);
        palabra.splice(10, 1, 0);
        contador++;
        contador++;
        contador++;
        document.getElementById("R1").innerHTML = "r";
        document.getElementById("R2").innerHTML = "r";
        document.getElementById("R3").innerHTML = "r";
      }
      if (letras === "o") {
        palabra.splice(2, 1, 0);
        palabra.splice(9, 1, 0);
        contador++;
        contador++;
        document.getElementById("O1").innerHTML = "o";
        document.getElementById("O2").innerHTML = "o";
      }
      if (letras === "g") {
        palabra.splice(3, 1, 0);
        contador++;
        document.getElementById("G").innerHTML = "g";
      }
      if (letras === "a") {
        palabra.splice(5, 1, 0);
        palabra.splice(7, 1, 0);
        contador++;
        contador++;
        document.getElementById("A1").innerHTML = "a";
        document.getElementById("A2").innerHTML = "a";
      }
      if (letras === "m") {
        palabra.splice(6, 1, 0);
        contador++;
        document.getElementById("M").innerHTML = "m";
      }
      if (letras === "d") {
        palabra.splice(8, 1, 0);
        contador++;
        document.getElementById("D").innerHTML = "d";
      }
      if (letras === "e") {
        palabra.splice(11, 1, 0);
        contador++;
        document.getElementById("E").innerHTML = "e";
      }
      if (letras === "s") {
        palabra.splice(12, 1, 0);
        contador++;
        document.getElementById("S").innerHTML = "s";
      }
      document.getElementById("adivinadas").innerHTML = contador;
    } else {
      intentos();
    }
  } else {
    alert("SOLO SE PUEDEN INGRESAR LETRAS MINUSCULAS");
  }
  win();
}

// Luego de envíar una letra por el input esa letra desaparece (solo si es correcta la letra que se ingresó)
function sacarLetra() {
  document.getElementById("letra").value = "";
}

// Comprueba los intentos
function intentos() {
  alert("LA PALABRA NO CONTIENE ESTA LETRA O YA FUE INGRESADA");
  contadorInt--;
  document.getElementById("intentos").innerHTML = contadorInt;
  if (contadorInt === 10) {
    image1.src = "imagenesAhorcado/imagen1.jpg";
  }
  else if (contadorInt === 9) {
    image1.src = "imagenesAhorcado/imagen2.jpg";
  }
  else if (contadorInt === 8) {
    image1.src = "imagenesAhorcado/imagen3.png";
  }
  else if (contadorInt === 7) {
    image1.src = "imagenesAhorcado/imagen4.png";
  }
  else if (contadorInt === 6) {
    image1.src = "imagenesAhorcado/imagen5.png";
  }
  else if (contadorInt === 5) {
    image1.src = "imagenesAhorcado/imagen6.png";
  }
  else if (contadorInt === 4) {
    image1.src = "imagenesAhorcado/imagen7.png";
  }
  else if (contadorInt === 3) {
    image1.src = "imagenesAhorcado/imagen8.png";
  }
  else if (contadorInt === 2) {
    image1.src = "imagenesAhorcado/imagen9.png";
  }
  else if (contadorInt === 1) {
    image1.src = "imagenesAhorcado/imagen10.png";
  }
  else if (contadorInt === 0) {
    image1.src = "imagenesAhorcado/imagen11.png";
    alert("Te quedaste sin intentos");
    contadorInt = 10;
    document.getElementById("intentos").innerHTML = contadorInt;
    contador = 0;
    document.getElementById("adivinadas").innerHTML = contador;
    letrasIngresadas = [];
    palabra = ["p", "r", "o", "g", "r", "a", "m", "a", "d", "o", "r", "e", "s"];

    document.getElementById("P").innerHTML = "_";

    document.getElementById("R1").innerHTML = "_";
    document.getElementById("R2").innerHTML = "_";
    document.getElementById("R3").innerHTML = "_";

    document.getElementById("O1").innerHTML = "_";
    document.getElementById("O2").innerHTML = "_";

    document.getElementById("G").innerHTML = "_";

    document.getElementById("A1").innerHTML = "_";
    document.getElementById("A2").innerHTML = "_";

    document.getElementById("M").innerHTML = "_";

    document.getElementById("D").innerHTML = "_";

    document.getElementById("E").innerHTML = "_";

    document.getElementById("S").innerHTML = "_";
  }
  console.log(contadorInt);
}

// Comprueba si ganó
function win() {
  if (contador === palabraSecreta.length) {
    alert("¡Felicitaciones, ganaste! La palabra era 'programadores' ");
    image1.src = "imagenesAhorcado/imagen1.jpg";
    palabra = ["p", "r", "o", "g", "r", "a", "m", "a", "d", "o", "r", "e", "s"];
    letrasIngresadas = [];
    contador = 0;
    contadorInt = 10;
    document.getElementById("adivinadas").innerHTML = contador;
    document.getElementById("intentos").innerHTML = contadorInt;

    document.getElementById("P").innerHTML = "_";

    document.getElementById("R1").innerHTML = "_";
    document.getElementById("R2").innerHTML = "_";
    document.getElementById("R3").innerHTML = "_";

    document.getElementById("O1").innerHTML = "_";
    document.getElementById("O2").innerHTML = "_";

    document.getElementById("G").innerHTML = "_";

    document.getElementById("A1").innerHTML = "_";
    document.getElementById("A2").innerHTML = "_";

    document.getElementById("M").innerHTML = "_";

    document.getElementById("D").innerHTML = "_";

    document.getElementById("E").innerHTML = "_";

    document.getElementById("S").innerHTML = "_";
  }
}
