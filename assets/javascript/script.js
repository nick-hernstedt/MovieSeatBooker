const container = document.querySelector(".container");
const seats = document.querySelectorAll(".seat:not(.occupied) .row");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("moive");

const ticketPrice = +moiveSelect.value;
