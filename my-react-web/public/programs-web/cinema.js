const container = document.querySelector('.seats_container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelected = document.getElementById("movies");

populateUI();//get data from localstorage and populate ui

let ticketPrice = +movieSelected.value;

//save movie selected info
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

    setMovieData(movieSelected.selectedMovieIndex, movieSelected.value)
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));;
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelected.selectedIndex = selectedMovieIndex;
    }
}
//movie select event
movieSelected.addEventListener('change', e => {
    ticketPrice = + e.target.value;
    setMovieData(e.target.movieIndex, e.target.moviePrice);
    updateSelectedCount();
});

//seat click event
container.addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
    ) {
        e.target.classList.add('selected');
        updateSelectedCount();
    }
})
const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')



updateSelectedCount();//initial count and total set

