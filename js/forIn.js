let carro = {
    marca: "Mazda",
    modelo: "2022",
    color: "negro",
    valor: "45000000"
}

for(x in carro){
    console.log(x)//asi se adquieren las propiedades
}

for(x in carro){
    console.log(`${x}: ${carro[x]}`)//asi se adquiere el valor que tiene las propiedades
}