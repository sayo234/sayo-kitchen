let count = 0;
let interval;

const countlabel = document.getElementById("countlabel");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const reset = document.getElementById("reset");

function updatedisplay() {
  countlabel.innerHTML = count;
}
updatedisplay();

function startcounting(changefn){
  changefn();
  interval = setInterval(changefn, 100);
}

function stopcounting(){
  clearInterval(interval);
}

function buttonHoldUpdate(button, changefn){
  button.addEventListener
  button.addEventListener("mousedown", () => startcounting(changefn));
  button.addEventListener("mouseup", stopcounting);
  button.addEventListener("mouseleave", stopcounting);

  button.addEventListener("touchstart", (e) =>{
    e.preventDefault();
    startcounting(changefn);
  });
  
  button.addEventListener("touchend", stopcounting);
}

buttonHoldUpdate(increaseBtn, () => {
  count++;
  updatedisplay();
});

buttonHoldUpdate(decreaseBtn, () => {
  if (count > 0) {
    count--;
  }
  updatedisplay();
});

reset.addEventListener("click", () => {
  count = 0;
  updatedisplay();
})
