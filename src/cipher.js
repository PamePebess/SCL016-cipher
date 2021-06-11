const cipher = {

encode: (displacements, messageBox) => {
let result = "";
for (let i = 0; i < messageBox.length; i++) {
let ascii = messageBox.charCodeAt(i);
if (ascii >= 65 && ascii <= 90) {
result += String.fromCharCode((ascii - 65 + displacements) % 26 + 65); //mayúsculas
}
else if (ascii >= 97 && ascii <= 122) {
result += String.fromCharCode((ascii - 97 + displacements) % 26 + 97); //minúsculas
}
else if (ascii >= 48 && ascii <= 57) {
result += String.fromCharCode((ascii - 48 + displacements) % 10 + 48); //números
}
else {
result += messageBox.charAt(i);
}
}
return result;
},

decode: (movement, finalText) => {
let result = "";
for (let i = 0; i < finalText.length; i++) {
let ascii = finalText.charCodeAt(i);
if (ascii >= 65 && ascii <= 90) {
result += String.fromCharCode((ascii - 90 - movement) % 26 + 90); 
}
else if (ascii >= 97 && ascii <= 122) {
result += String.fromCharCode((ascii - 122 - movement) % 26 + 122); 
}
else if (ascii >= 48 && ascii <= 57) {
result += String.fromCharCode((ascii - 57 - movement) % 10 + 57); 
}
else {
result += finalText.charAt(i);
}
}
return result;
},
};
export default cipher;

