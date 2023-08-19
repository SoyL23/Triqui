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
        ocuparCasilla(Idtable, index, tableDate.index);
    });
});

function ocuparCasilla(id, index, tableDate) {
    let idModificar = id;
    const casilla = document.getElementById(idModificar);
    console.log(idModificar)
        if (indicesAfectados.includes(index)) {
            indicesAfectados.push(index);
        }
        if(indicesAfectados.length % 2 === 0){
            casilla.innerHTML = "O";
        }
        else if (indicesAfectados.length % 2 !== 0){
            casilla.innerHTML = "X";
        }
    // return indicesAfectados;
    console.log(tableDate)
    console.log(indicesAfectados);
}
