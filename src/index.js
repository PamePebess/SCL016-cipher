import cipher from './cipher.js';

console.log(cipher);

let mensaje = document.getElementById('mensaje');
let desplazamiento = document.getElementById('desplazamiento');
let codi = document.getElementById('codi');
let deco = document.getElementById('deco');



//boton codificar
codi.addEventListener("click", codificar);
  function codificar() {
   let cajatextos = mensaje.value;
   let desplazamientos = parseInt(desplazamiento.value);
   let resultado = window.cipher.encode(desplazamientos,cajatextos);

   document.getElementById('cajaresultado').value = resultado;
  }

//boton decodificar
deco.addEventListener("click", decodificar);
 function decodificar() {
   
   let cajadeco = mensaje.value;
   let movimiento = parseInt(desplazamiento.value);
   let resultado = window.cipher.decode(movimiento,cajadeco);

   document.getElementById('cajaresultado').value = resultado;
 }
