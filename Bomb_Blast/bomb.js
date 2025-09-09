let time = 10;
let timerDisplay = document.getElementById("timer");
let bombImage = document.getElementById("bombImage");
let quote = document.getElementById("quote");

let interval = setInterval(function () {
  timerDisplay.innerText = time;


  if (time <= 3) {
    timerDisplay.style.color = "red";
  }

  if (time === 0) {
    clearInterval(interval);
    bombImage.src = "blast-removebg-preview.png"; 
    document.body.classList.add("blast-bg");

   
    quote.innerText = "💥 Kaboom! Next time, cut the wire first! 😂";
    quote.style.color = "red";
    quote.style.fontWeight = "bold";
  }

  time--;
}, 1000);
