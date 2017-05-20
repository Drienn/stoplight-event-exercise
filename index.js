document.addEventListener("DOMContentLoaded", function() {
var button = [document.querySelector('#stopButton'), document.querySelector('#slowButton'), document.querySelector('#goButton')];
var stopLight = document.getElementById('stopLight');
var slowLight = document.getElementById('slowLight');
var goLight = document.getElementById('goLight');

var redActive = (toggle) => {
  if (stopLight.style.backgroundColor !== "red"){
  stopLight.style.backgroundColor = "red";
  }
  else {
    stopLight.style.backgroundColor = "black";
  }
}
var yellowActive = () => {
  if (slowLight.style.backgroundColor !== "yellow"){
    slowLight.style.backgroundColor = "yellow";
  }else {
    slowLight.style.backgroundColor = "black";
  }
}
var greenActive = () => {
  if (goLight.style.backgroundColor !== "green"){
    goLight.style.backgroundColor = "green";
  }
  else {
    goLight.style.backgroundColor = "black";
  }
}


stopButton.addEventListener('click', redActive)
slowButton.addEventListener('click', yellowActive)
goButton.addEventListener('click', greenActive)

// - When a user's mouse enters a button, log `"Entered <textContent> button"` to the console.
// - When a user's mouse leaves a button, log `"Left <textContent> button"` to the console.

var enter = (event) => {
  console.log("Entered "+event.target.textContent+ " button");
}
var leave = (event) => {
  console.log("Left "+event.target.textContent+ " button");
}
button[0].addEventListener("mouseenter", enter);
button[0].addEventListener("mouseleave", leave);

button[1].addEventListener("mouseenter", enter);
button[1].addEventListener("mouseleave", leave);

button[2].addEventListener("mouseenter", enter);
button[2].addEventListener("mouseleave", leave);



});
