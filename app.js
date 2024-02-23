let mensajeInicial = document.getElementById("mensaje-inicial");
let mensajeEncriptado = document.getElementById("mensaje-encriptado");
let contenedorEncriptado = document.getElementById("container-encriptado");
let textoUsuario = null;
let alerta = document.getElementById("custom-alert");
const regexVocalesYEspacios= /^[a-z ]+$/;

contenedorEncriptado.style.display='none';
alerta.style.display='none';

function mostrarAlerta() {
    document.getElementById('custom-alert').style.display = '';
}

function cerrarAlerta() {
    document.getElementById('custom-alert').style.display = 'none';
}

function encriptar () {
    // Defino un objeto que mapea las vocales a sus reemplazos correspondientes
    const reemplazos = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
    };
    // Expresión regular que coincida con cualquier vocal
    const regexVocales = /[aeiou]/g;
    // Obtener el valor del campo de texto dentro de la función
    textoUsuario = document.getElementById("texto-usuario").value;
    // Verificar si el valor del campo de texto no está vacío y que sean solo letras minúsculas
    if (textoUsuario.trim() !== "" && regexVocalesYEspacios.test(textoUsuario)) {
        // Utilizar el método replace para realizar la sustitución
        mensajeEncriptado.textContent = textoUsuario.replace(regexVocales, (match) => reemplazos[match] || match);
        // Modificar el estilo display para no mostrar el mensaje inicial
        mensajeInicial.style.display = 'none';
        // Limpiar el campo de texto
        document.getElementById('texto-usuario').value = '';
        //Mostrar bloque encriptado
        contenedorEncriptado.style.display='';
    }else{
        // Mostrar el mensaje inicial si el texto no cumple con los requisitos
        mensajeInicial.style.display='';
        contenedorEncriptado.style.display='none';
        mostrarAlerta();
        // Limpiar el campo de texto
        document.getElementById('texto-usuario').value = '';
    }
}

function copiarAlPortapapeles(){
    navigator.clipboard.writeText(mensajeEncriptado.value);
}

function desencriptar(){
    // Defino un objeto que mapee para los reemplazos correspondientes
    const reemplazosNuevos = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
      };
    // Crear una expresión regular que coincida con los patrones a reemplazar
    const regexNuevos = /(enter|ober|imes|ai|ufat)/g;
    // Obtener el valor del campo de texto dentro de la función
    textoUsuario = document.getElementById("texto-usuario").value;
    // Verificar si el valor del campo de texto no está vacío y que sean solo letras minúsculas
    if (textoUsuario.trim() !== "" && regexVocalesYEspacios.test(textoUsuario)) {
        // Utilizar el método replace para realizar la sustitución
        mensajeEncriptado.textContent = textoUsuario.replace(regexNuevos, (match) => reemplazosNuevos[match] || match);
        // Modificar el estilo display para no mostrar el mensaje inicial
        mensajeInicial.style.display = 'none';
        // Limpiar el campo de texto
        document.getElementById('texto-usuario').value = '';
        //Mostrar bloque encriptado
        contenedorEncriptado.style.display='';
    }else{
        // Mostrar el mensaje inicial si el texto no cumple con los requisitos
        mensajeInicial.style.display='';
        contenedorEncriptado.style.display='none';
        mostrarAlerta();
        // Limpiar el campo de texto
        document.getElementById('texto-usuario').value = '';
    }
}