const tableDate = document.querySelectorAll("td");
tableDate.forEach(td => {
td.addEventListener('click', (evento)=>{
    const Idtable = evento.target.id;
    ocuparCasilla(Idtable);
    }
);
});

function ocuparCasilla(id){
    let idModificar = id;
    const casilla = document.getElementById(idModificar);
    casilla.innerHTML="O";
}