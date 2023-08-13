// const tableDate = document.querySelectorAll("td");
// tableDate.forEach(td => {
// td.addEventListener('click', (evento)=>{
//     const Idtable = evento.target.id;
//     ocuparCasilla(Idtable);
//     console.log(tableDate)
//     }
// );
// });

// function ocuparCasilla(id){
//     let idModificar = id;
//     const casilla = document.getElementById(idModificar);
//     casilla.innerHTML="O";
// }

const tableDate = document.querySelectorAll("td");
const indicesAfectados = [];

tableDate.forEach((td, index) => {
    td.addEventListener('click', (evento) => {
        const Idtable = evento.target.id;
        ocuparCasilla(Idtable, index);
        console.log(indicesAfectados.length, indicesAfectados);
    });
});

function ocuparCasilla(id, index) {
    let idModificar = id;
    const casilla = document.getElementById(idModificar);

    if (!indicesAfectados.includes(index)) {
        indicesAfectados.push(index);
    }
    if(indicesAfectados.length % 2 == 0){
        casilla.innerHTML = "O";
    }
    else{
        casilla.innerHTML = "X";
    }
}
