/*
3 vectores

v1 v2 v3 

tienen 3 strings
si la variable spiderman esta en peligro debe lansar el mensaje
"como decia el tio ben, rescuerda lo siguiente, ten cuidado con el duende verde"

si no esta en peligro escribir:
"como decia el tio ben un gran poder requiere una gran responsabilidad"

con funciones flecha

*/

const v1 = "tio ben: ";

const v2 = "recuerda lo siguiente, ";

const v3 = "'un gran poder requiere una gran responsabilidad' ";

const v4 = "ten cuidado con el duende verde";

let peligro = false;

const spiderman = (peligro) =>{
    
    if(peligro == true){
        return `como decia el ${v1} ${v2} ${v4}`;
    }else{
        return `como decia el ${v1} ${v3}`;
    }
}

let recordando = spiderman(peligro);
console.log(recordando);
