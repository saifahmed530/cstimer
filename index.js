var sec = 00;
var tens = 00;
var outputSec = document.getElementById("sec");
var outputTens = document.getElementById("tens");
var bg = document.querySelector(".bg");
var appear = document.querySelector(".appear");
const times = document.getElementById("times");
var Interval;

localStorage.setItem("key", 0);

bg.addEventListener("click", () => {
  tens = 0;
  sec = 0;
  tens = 0;
  sec = 0;
  clearInterval(Interval);
  Interval = setInterval(startTime, 10);
  appear.style.visibility = "visible";
});

// appear code

appear.addEventListener("click", () => {
  clearInterval(Interval);
  appear.style.visibility = "hidden";
  var time = `${sec} : ${tens}`;
  var key = parseInt(localStorage.getItem("key"));
  var nKey = key + 1;
  localStorage.setItem(nKey, time);
  localStorage.setItem("key", nKey);
  console.log("done");
  for (var i = 1; i < nKey; i++) {
    times.innerHTML = "";
    var t = localStorage.getItem(i);
    var span = document.createElement("span");
    span.classList.add("time");
    span.innerHTML = `${t}s`;
    times.appendChild(span);
    console.log("done");
  }
});

function startTime() {
  tens++;
  if (tens <= 9) {
    outputTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    outputTens.innerHTML = tens;
  }
  if (tens > 99) {
    sec++;
    outputSec.innerHTML = "0" + sec;
    tens = 0;
    outputTens.innerHTML = "0" + tens;
  }
  if (sec > 9) {
    outputSec.innerHTML = sec;
  }
}
