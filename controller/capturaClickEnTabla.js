const tableDate = document.querySelectorAll("td");
tableDate.forEach(td => {
td.addEventListener('click', (evento)=>{
    const Idtable = evento.target.id;
    console.log(evento);
    console.log(Idtable); 
});
});