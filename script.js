const textArea = document.querySelector(".mensaje");
const encriptar = document.querySelector(".btn-primario");
const desencriptar = document.querySelector(".btn-secundario");
const mensajeDescriptivo = document.querySelector(".mensaje-descriptivo");
const campoResultado = document.querySelector(".mensje-mostrar");
const botonCopiar = document.querySelector(".boton-copiar");

encriptar.addEventListener("click", encriptador);
desencriptar.addEventListener("click", desencriptador);

function encriptador(e) {
  let mensaje = textArea.value;
  let mensajeEncriptado = "";

  if (mensaje.trim() === "") {
    mensajeDescriptivo
    return;
  }
  
  if (!/^[a-z]+$/.test(mensaje)) {
    mensajeDescriptivo.innerHTML= "El mensaje solo puede contener letras minúsculas y sin caracteres especiales"
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

  let mensajeEncriptadoo = textArea.value;
  let palabras_desencriptadas = mensajeEncriptado
    .split(/(enter|imes|ai|ober|ufat)/g)
    .map(function (palabra) {
      return palabras.hasOwnProperty(palabra) ? palabras[palabra] : palabra;
    });

  let mensajeDesencriptado = palabras_desencriptadas.join("");
  textArea.value = mensajeDesencriptado;
  campoResultado.textContent = mensajeDesencriptado;
  textArea.value = "";

  mensajeDescriptivo.innerHTML = "";
}

botonCopiar.addEventListener("click", () => {
  const campoResultado = document.querySelector(".mensje-mostrar");
  const texto = campoResultado.textContent;

  navigator.clipboard.writeText(texto)
    .then(() => {
      console.log("Texto copiado al portapapeles: ", texto);
      // Aquí puedes agregar cualquier otra lógica que desees realizar después de copiar el texto
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
      // Aquí puedes manejar el error o agregar cualquier otra lógica de manejo de errores
    });
    Swal.fire({
      position: 'bottom-start',
      icon: 'success',
      title: 'mensaje copiado',
      showConfirmButton: false,
      timer: 1500,
      toast: true
    })
});