let string1 = "1 ";

let string2 = "hola como estas ";
let string3 = "espero no del todo mal";
let string4 = string1 + string2 + string3;//concadenacion de variables string
let string5 = `${string1} ${string2} ${string3}`;//otra forma de concadenar

console.log(string4);

let frase = 'JavaScript tiene sus cositas';
let numeroCaracteres = frase.length;//se almacena la cantidad de caracteres de la variable frase

console.log(frase.length);//cantidad de caractres que tiene almacenada la variable
console.log(frase.toLocaleUpperCase());//mayusculas
console.log(frase.toLocaleLowerCase());//minusculas
console.log(frase.substring(0, 10));// sirve para visualizar la longitud de caracteres que se escoja ejemplo eso trae "JavaScript"
