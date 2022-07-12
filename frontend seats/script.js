const container = document.querySelector(".container");
const cadeira = document.querySelector(".vagas.cadeira:not(.cadeira_vendida");
const count= document.getElementById("count");
const total= document.getElementById("total");
const filmeSelect= document.getElementById("filme");

populateUI();


let ticketPrice = +filmeSelect.value  ;

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}


function updateSelectedCount() {

  const selectedSeats = document.querySelectorAll(".cadeira_selecionada");
  
  const selectedSeatsCount = selectedSeats.length -1;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  setMovieData(filmeSelect.selectedIndex, filmeSelect.value);
}


function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    cadeiras.forEach((cadeira, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        console.log(cadeira.classList.add("selecionada"));
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    filmeSelect.selectedIndex = selectedMovieIndex;
    console.log(selectedMovieIndex);
  }
}
console.log(populateUI());

filmeSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});


container.addEventListener("click", (e) => {
  if (e.target.classList.contains("cadeira") && !e.target.classList.contains("cadeira_vendida")) {
    e.target.classList.toggle("cadeira_selecionada");
    
    updateSelectedCount();
  }
  
});
function button(){
      let mensagem;
      let retorno = confirm("você deseja comprar os ingressos ");
      const confirma= document.getElementById("confirma");
      retorno =confirma;
      if (confirma == true)
      {
       container.addEventListener("click", (e) => {
          if (e.target.classList.contains("cadeira") && !e.target.classList.contains("cadeira_selecionada")) {
          e.target.classList.toggle("vendida");
         updateSelectedCount();
          }
      });
      mensagem = "comprar ingressos";
    } 
       else( confirma==false)
      {
        mensagem = "Você cancelou a operação";
      }
  }
updateSelectedCount();
