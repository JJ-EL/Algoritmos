//comparar 3 numero
// averiaguar que numero es mayor
// y si hay numeros repetidos que se imprimar en consola cual es el repetido

let lista1 = [1,3,21,7,9];
let lista2 = [2,4,66,8,0];
let resultadoLista1 = lista1[0];

for(i=0; i<lista1.length; i++){
    if(lista1[i] > resultadoLista1){
        resultadoLista1 = lista1[i];
    }
}

for(i=0; i<lista2.length; i++){
    if(lista2[i] > resultadoLista1){
        resultadoLista1 = lista2[i];
    }
}

console.log(resultadoLista1);