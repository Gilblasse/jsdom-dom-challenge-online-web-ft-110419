let currentCount = document.querySelector("#counter");
let minusButton = document.querySelector("#minus");
let plusButton = document.querySelector("#plus");
let heartButton = document.querySelector("#heart");
let pauseButton = document.querySelector("#pause");
let likes = document.querySelector("ul");

let pause;

function startCounter(){
  let num = parseInt(currentCount.innerText);
  num++ ;
  currentCount.innerText = num;
}

function subtractCount() {
  let currentCount = document.querySelector("#counter");
  let num = parseInt(currentCount.textContent);
  num--;
  currentCount.innerText = num;
}

function addCount() {
  let currentCount = document.querySelector("#counter");
  let num = parseInt(currentCount.textContent);
  num++;
  currentCount.innerText = num;
}

function pauseCount() {
  if (this.innerText == "pause"){
    this.innerText = "resume";
    clearInterval(pause);
  }else{
    this.innerText = "pause";
    pause = setInterval(startCounter,1000);
  }
}

function addLike() {
  likes.innerHTML = `<div>${currentCount.innerText}</div>`;
}



pause = setInterval(startCounter,1000);

minusButton.addEventListener('click',subtractCount);
plusButton.addEventListener('click',addCount);
pauseButton.addEventListener('click',pauseCount);
heartButton.addEventListener('click',pauseCount);

