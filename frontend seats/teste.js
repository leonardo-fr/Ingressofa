const container = document.querySelector('.container');
const seats = document.querySelectorAll('.vagas .cadeira:not(.selecionada');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('filme');

populateUI();
let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.vagas .cadeira.selecionada');

  const seatsIndex = [...selectedSeats].map((cadeira) => [...cadeiras].indexOf(cadeira));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  //copy selected seats into arr
  // map through array
  //return new array of indexes

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// get data from localstorage and populate ui
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    cadeiras.forEach((cadeira, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        cadeira.classList.add('cadeira_selecionada');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('cadeira') && !e.target.classList.contains('cadeira_vendida')) {
    e.target.classList.toggle('cadeira_selecionada');

    updateSelectedCount();
  }
});

// intial count and total
updateSelectedCount();