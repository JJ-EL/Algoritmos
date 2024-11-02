const titulo = document.createElement("h1");

// creacionde titulo
titulo.textContent = "Hola soy Spiderman";
document.body.appendChild(titulo);

// creacion de boton EJEMPLO
// const boton = document.createElement("button");
// boton.innerText = "Enviar";
// //style boton
// boton.style = "background: green; color: white";
// document.body.appendChild(boton);

// boton.addEventListener("click",()=>{
//     document.body.innerHTML = `
//     <h1>Hola vecino</h1>
//     `;
// })

const v1 = "tio ben: ";

const v2 = "recuerda lo siguiente, ";

const v3 = "'un gran poder requiere una gran responsabilidad' ";

const v4 = "ten cuidado con el duende verde";

const spiderman = (peligro) =>{
    
    if(peligro == true){
        return `como decia el ${v1} ${v2} ${v4}`;
    }else{
        return `como decia el ${v1} ${v3}`;
    }
}

// let recordando = spiderman(peligro);

const Peligro = document.createElement("button");
Peligro.innerText = "En peligro";
Peligro.style = "background: red; color: white";
document.body.appendChild(Peligro);

Peligro.addEventListener("click", ()=>{
    let peligro = true;
    recordando = spiderman(peligro);
    document.body.innerHTML = `<p>${recordando}</p>
    <br>
    <button><a href="/Algoritmos/index.html">Volver</a></button>
    `; 
})

const noPeligro = document.createElement("button");
noPeligro.innerText = "No esta en peligro";
noPeligro.style = "background: white";
document.body.appendChild(noPeligro);

noPeligro.addEventListener("click", ()=>{
    let peligro = false;
    recordando = spiderman(peligro);
    document.body.innerHTML = `<p>${recordando}</p>
    <br>
    <a href="/Algoritmos/index.html">Volver</a>
    `; 
})


//-------------------------------------------------------------------------------------

const btnNombre = document.createElement("button");
btnNombre.innerText = "nombre";
document.body.appendChild(btnNombre);
btnNombre.addEventListener("click", ()=>{
    let entrada = document.getElementById("name");
    let ValorEntrada = entrada.value;

    if(ValorEntrada.trim().length==0){
        alert("El campo esta vacio")
    }else{
        alert(`Hola ----> ${ValorEntrada}`);
    }
});

