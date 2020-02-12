const container = document.querySelector(".container");
const seats = document.querySelectorAll(".seat:not(.occupied) .row");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("moive");

let ticketPrice = +moiveSelect.value;

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  let selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSEatsCount * ticketPrice;
}

// movie select event
movieSelect.addEventListener("change", function(e) {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// seat click event
container.addEventListener("click", function(e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
