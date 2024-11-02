//comparar 3 numero
// averiaguar que numero es mayor
// y si hay numeros repetidos que se imprimar en consola cual es el repetido

const listas1 = [1,3,21,7,99];
const listas2 = [2,4,66,8,0];
const resultadoFinal = listas1[0];

function numeroMayor(valor1, valor2, valor3){
    for(i=0; i<valor1.length; i++){
        if(valor1[i] > valor3){
            valor3 = valor1[i];
        }
    }
    // return console.log("el numero mayor de la lista 1 es: ",valor3);
    
    for(i=0; i<valor2.length; i++){
        if(valor2[i] > valor3){
            valor3 = valor2[i];
        }
        // return console.log("el numero mayor de la lista 2 es: ",valor3);
    }
    
    return valor3;
}

const x = numeroMayor(listas1, listas2, resultadoFinal);
console.log(x);