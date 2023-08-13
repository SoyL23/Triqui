//El evento DOMContentLoaded asegura que tu JavaScript se ejecute después de que se haya cargado el DOM
document.addEventListener("DOMContentLoaded", function() {
    let nombreJugador1 = prompt("Nombre Jugador 1");
    let nombreJugador2 = prompt("Nombre Jugador 2");
    agregarNombre(nombreJugador1);
    agregarNombre1(nombreJugador2);

});

function agregarNombre(nombre){
    const playerContainer = document.getElementById('player1');
    const h2name = document.createElement("h2");
    h2name.innerHTML=nombre;
    playerContainer.appendChild(h2name);
}
function agregarNombre1(nombre){
    const playerContainer = document.getElementById('player2');
    const h2name = document.createElement("h2");
    h2name.innerHTML=nombre;
    playerContainer.appendChild(h2name);
}

// function agregarNombre(nombre){
//     const playerContainer = document.querySelectorAll('players');
//     const h2name = document.createElement("h2");
//     h2name.innerHTML=nombre;
//     for(let index=0;index<nombre.length;index++){
//         for(let i=0;i<playerContainer.length;i++){
//             playerContainer[i].appendChild(h2name)
//         }
//     }
// }