let botonEncriptar = document.getElementById('encriptar')
botonEncriptar.addEventListener('click', encriptar)

let botonDesencriptar = document.getElementById('desencriptar')
botonDesencriptar.addEventListener('click', desencriptar)

function encriptar() {
    var texto = document.getElementById('textoEncriptar').value;
    var textoEncriptado = encriptarTexto(texto);
    document.getElementById('textoSalida').value = textoEncriptado;
    textoSalida.style.fontSize = "24px";
    textoSalida.style.height = "500px"; 
    textoSalida.style.width = "200px";
    limpiarContenedorSalida();
}

function desencriptar() {
    var texto = document.getElementById('textoEncriptar').value;
    var textoDesencriptado = desencriptarTexto(texto);
    document.getElementById('textoSalida').value = textoDesencriptado;
    textoSalida.style.fontSize = "24px";
    textoSalida.style.height = "500px"; 
    textoSalida.style.width = "200px";
    limpiarContenedorSalida();
}


function encriptarTexto(texto) {
    var textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    var textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    return textoDesencriptado;
}

function limpiarContenedorSalida() {
    var parrafoTexto = document.getElementById('texto');
    parrafoTexto.style.display = 'none'; 
      
    var imagen = document.querySelector('.container_Salida img');
    imagen.style.display = 'none'; 
}

let botonCopiar = document.getElementById('copiar');
botonCopiar.addEventListener('click', copiarAlPortapapeles);

function copiarAlPortapapeles() {
    var textoSalida = document.getElementById('textoSalida');
    textoSalida.select(); 
    document.execCommand('copy'); 
    alert('Texto copiado al portapapeles'); 
}
