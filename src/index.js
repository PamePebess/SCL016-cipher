import cipher from './cipher.js';
 
let textoentrada = document.getElementById('textoentrada');
let desplazamiento = document.getElementById('desplazamiento');
let codi = document.getElementById('codi');
let deco = document.getElementById('deco');


codi.addEventListener("click", codificar);
  function codificar() {
   
   let cajamensaje = textoentrada.value;  
   let desplazamientos = parseInt(desplazamiento.value);
   let resultado = cipher.encode(desplazamientos,cajamensaje);

   document.getElementById('textosalida').value = resultado;
  }


deco.addEventListener("click", decodificar);
 function decodificar() {
   
   let textofinal = textoentrada.value;
   let movimiento = parseInt(desplazamiento.value);
   let resultado = cipher.decode(movimiento,textofinal);

   document.getElementById('textosalida').value = resultado;
 }


  console.log(cipher);


