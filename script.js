/* Elementos del DOM */

const textArea = document.querySelector(".mensaje");
const encriptar = document.querySelector(".btn-primario");
const desencriptar = document.querySelector(".btn-secundario");
const mensajeDescriptivo = document.querySelector(".mensaje-descriptivo");
const campoResultado = document.querySelector(".mensje-mostrar");
const botonCopiar = document.querySelector(".boton-copiar");


function encriptador(){

  let mensaje = textArea.value;
  let mensajeEncriptado = "";

  if (mensaje.trim() === "") {
    mensajeDescriptivo
    return;
  } else if (!/^[a-z\s]+$/.test(mensaje)) {
    campoResultado.innerHTML = "";
    mensajeDescriptivo.innerHTML = "El mensaje solo puede contener letras minúsculas y sin caracteres especiales"
    return;
  }

  for (let i = 0; i < mensaje.length; i++) {
    let caracter = mensaje[i];

    switch (caracter) {
      case "a":
        mensajeEncriptado += caracter.replace("a", "ai");
        break;

      case "e":
        mensajeEncriptado += caracter.replace("e", "enter");

        break;
      case "i":
        mensajeEncriptado += caracter.replace("i", "imes");

        break;
      case "o":
        mensajeEncriptado += caracter.replace("o", "ober");

        break;
      case "u":
        mensajeEncriptado += caracter.replace("u", "ufat");

        break;

      default:
        mensajeEncriptado += caracter;
        break;
    }
  }
  textArea.value = "";
  mensajeDescriptivo.innerHTML = "";
  campoResultado.textContent = mensajeEncriptado;
}

function desencriptador() {

  let mensajeEncriptado = textArea.value;

  if (mensajeEncriptado.trim() === "") {
    mensajeDescriptivo
    return;
  }

  let palabras = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  let palabras_desencriptadas = mensajeEncriptado
    .split(/(enter|imes|ai|ober|ufat)/g)
    .map(function (palabra) {
      return palabras.hasOwnProperty(palabra) ? palabras[palabra] : palabra;
    });
 
  let mensajeDesencriptado = palabras_desencriptadas.join("");
  campoResultado.textContent = mensajeDesencriptado;
  textArea.value = "";

  mensajeDescriptivo.innerHTML = "";
}

function copiarTexto() {

  const campoResultado = document.querySelector(".mensje-mostrar");
  const texto = campoResultado.textContent;

  navigator.clipboard.writeText(texto)
    .then(() => {
      swalAlert('success', 'mensaje copiado')
    })
    .catch((error) => {
      swalAlert('error', 'mensaje no copiado')
    });
};

function swalAlert(icon, title){
return Swal.fire({
  position: 'bottom-start',
  icon : icon,
  title : title,
  showConfirmButton: false,
  timer: 1500,
  toast: true
})
}
encriptar.addEventListener("click", encriptador);
desencriptar.addEventListener("click", desencriptador);
botonCopiar.addEventListener("click", copiarTexto);