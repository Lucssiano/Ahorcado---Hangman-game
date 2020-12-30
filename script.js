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
  var letras = document.getElementById("ingreso").value;
  var soloLetras = /^[a-z]+$/;

  if (letras.length > 1) {
    alert("¡INGRESE UNA SOLA LETRA Y NO HAGA ESPACIOS!");
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
    alert("NO SE PUEDE DEJAR EL CAMPO VACIO Y SOLO SE PUEDEN INGRESAR LETRAS MINUSCULAS");
  }
  win();
}

// Luego de envíar una letra por el input esa letra desaparece (solo si es correcta la letra que se ingresó)
function sacarLetra() {
  document.getElementById("ingreso").value = "";
}

// Comprueba los intentos
function intentos() {
  alert("LA PALABRA NO CONTIENE ESTA LETRA O YA FUE INGRESADA");
  contadorInt--;
  if (contadorInt === 9) {
    image1.src = "imagenesAhorcado/imagen2.jpg";
    document.getElementById("intentos").innerHTML = contadorInt;
  } else if (contadorInt === 8) {
    document.getElementById("intentos").innerHTML = contadorInt;
    image1.src = "imagenesAhorcado/imagen3.png";
  } else if (contadorInt === 7) {
    document.getElementById("intentos").innerHTML = contadorInt;
    image1.src = "imagenesAhorcado/imagen4.png";
  } else if (contadorInt === 6) {
    document.getElementById("intentos").innerHTML = contadorInt;
    image1.src = "imagenesAhorcado/imagen5.png";
  } else if (contadorInt === 5) {
    document.getElementById("intentos").innerHTML = contadorInt;
    image1.src = "imagenesAhorcado/imagen6.png";
  } else if (contadorInt === 4) {
    document.getElementById("intentos").innerHTML = contadorInt;
    image1.src = "imagenesAhorcado/imagen7.png";
  } else if (contadorInt === 3) {
    document.getElementById("intentos").innerHTML = contadorInt;
    image1.src = "imagenesAhorcado/imagen8.png";
  } else if (contadorInt === 2) {
    document.getElementById("intentos").innerHTML = contadorInt;
    image1.src = "imagenesAhorcado/imagen9.png";
  } else if (contadorInt === 1) {
    document.getElementById("intentos").innerHTML = contadorInt;
    image1.src = "imagenesAhorcado/imagen10.png";
  } else if (contadorInt == 0) {
    document.getElementById("intentos").innerHTML = contadorInt;
    image1.src = "imagenesAhorcado/imagen11.png";
    setTimeout(function () {
      alert("Te quedaste sin intentos");
      image1.src = "imagenesAhorcado/imagen1.jpg";
      document.getElementById("adivinadas").innerHTML = contador;
      document.getElementById("intentos").innerHTML = contadorInt;
    }, 100);
    contadorInt = 10;
    contador = 0;
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
  // document.getElementById("intentos").innerHTML = contadorInt; // Se podria poner acá para hacerlo más simple , pero para lo que quiero hacer no sirve
  document.getElementById("adivinadas").innerHTML = contador;
  console.log(contadorInt);
}

// Comprueba si ganó
function win() {
  if (contador === palabraSecreta.length) {
    setTimeout(function () {
      alert("¡Felicitaciones, ganaste! La palabra era 'programadores' ");
      image1.src = "imagenesAhorcado/imagen1.jpg";
      document.getElementById("adivinadas").innerHTML = contador;
      document.getElementById("intentos").innerHTML = contadorInt;
    }, 100);
    palabra = ["p", "r", "o", "g", "r", "a", "m", "a", "d", "o", "r", "e", "s"];
    letrasIngresadas = [];
    contador = 0;
    contadorInt = 10;
    setTimeout(function () {
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
    }, 100);
  }
}

// Función para poder enviar la letra presionando enter
function presionarTecla() {
  teclaEnter = event.keyCode;
  if (teclaEnter == 13) {
    verific();
  }
}

// Se captura/ejecuta el evento de presionar la tecla enter
window.onkeydown = presionarTecla;
