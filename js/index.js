console.log("hola mundo")

let numero = 3; // la variable puede cambiar
const numero3 = 4; // la variable siempre estara fija

//boleano
let boleano = true; 
let nulo = null; //lo ponemos nosotros
let noDefinido = undefined; //lo pone el sistema

let simboloUnico = Symbol('unico');

//enteros largos
let nuemroGrande = 2n;

console.log("hola mundo: ", nuemroGrande);


//objetos
let carro = {
    marca: "Honda",
    modelo: "modelo 99",
    color: "negro",
    valor: "30000000",
}

console.log("Carro: ", carro.marca);

//arreglos y arrays
let animales = ["Perro", "Gato", "Nutria"];

console.log("animales: ", animales[0]);
