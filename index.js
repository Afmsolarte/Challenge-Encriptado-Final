function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");

  // Permitir solo letras minúsculas y espacios
  if (!/^[a-z\s]+$/.test(texto)) {
    alert("El texto solo debe contener letras minúsculas, sin acentos ni caracteres especiales.");
    document.getElementById("texto").value = ""; // Vacía el campo si no cumple con las condiciones
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    return;
  }

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = textoCifrado;
  } else {
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  }
}


function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
  if (texto.length != 0) {
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = textoCifrado;
  } else {
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  }  
}

function copiar() {
  let parrafo = document.getElementById("parrafo");
  let seleccion = window.getSelection();
  let rango = document.createRange();
  rango.selectNodeContents(parrafo);
  seleccion.removeAllRanges();
  seleccion.addRange(rango);
  document.execCommand("copy");
  alert("Texto copiado: " + parrafo.textContent);
}