const cipher = {
encode: (desplazamientos, cajamensaje) => {
 let resultado = "";
  for (let i = 0; i < cajamensaje.length; i++) {
    let ascii = cajamensaje.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
    resultado += String.fromCharCode((ascii - 65 + desplazamientos) % 26 + 65); //mayúsculas
    }
    else if (ascii >= 97 && ascii <= 122) {
    resultado += String.fromCharCode((ascii - 97 + desplazamientos) % 26 + 97); //minúsculas
    }
    else if (ascii >= 48 && ascii <= 57) {
    resultado += String.fromCharCode((ascii - 48 + desplazamientos) % 10 + 48); //números
    }
    else {
    resultado += cajamensaje.charAt(i);
    }
    }
    return resultado;
  },
decode: (movimiento, textofinal) => {
  let resultado = "";
    for (let i = 0; i < textofinal.length; i++) {
    let ascii = textofinal.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
    resultado += String.fromCharCode((ascii - 90 - movimiento) % 26 + 90); 
    }
    else if (ascii >= 97 && ascii <= 122) {
    resultado += String.fromCharCode((ascii - 122 - movimiento) % 26 + 122); 
    }
    else if (ascii >= 48 && ascii <= 57) {
    resultado += String.fromCharCode((ascii - 57 - movimiento) % 10 + 57); 
    }
    else {
    resultado += textofinal.charAt(i);
    }
    }
    return resultado;
  },
};
export default cipher;

