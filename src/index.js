import cipher from './cipher.js';
 
// variables elementos html
let inputText = document.getElementById('inputText');
let displacement = document.getElementById('displacement');
let encodeButton = document.getElementById('encodeButton');
let decodeButton = document.getElementById('decodeButton');

//botón codificar
encodeButton.addEventListener("click", encoding);
 function encoding() {
 let messageBox = inputText.value;  
 let displacements = parseInt(displacement.value);
 let result = cipher.encode(displacements,messageBox);
 document.getElementById('outputText').value = result;
 }

//botón decodificar
decodeButton.addEventListener("click", decoding);
 function decoding() {
 let finalText = inputText.value;
 let movement = parseInt(displacement.value);
 let result = cipher.decode(movement,finalText);
 document.getElementById('outputText').value = result;
 }
console.log(cipher);


