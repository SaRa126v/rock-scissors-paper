// الگوریتم:
// گربه به صورت رندوم انتخاب کنه
// عکسی ک انتخاب کرده نمایش داده بشه

// بازیکن هم انتخاب کنه
// عکسی ک انتخاب کرده نمایش داده بشه

// انتخاب هردوتاشون مقایسه بشه و براشون شرط نوشته بشه:
// مثلا اگه
// ی متن هم بیاد ک بگه بردی یا باختی یا مساویه
// امتیاز به برنده اضافه شه

// میتونه تایمر هم داشته باشه

// user choices.........................................

const userOptions = document.querySelectorAll("#picking img");
const handText = document.querySelector("#handText");
const handImg = document.querySelector("#handImg");

userOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const optionId = option.getAttribute("data-id");
    switch (optionId) {
      case "handRock":
        handImg.src = "assets/img/hand Rock.png" ;
        handText.textContent = "Rock";
        compareChoices("handRock");
        break;

      case "handPaper":
        handImg.src = "assets/img/hand Paper.png" ;
        handText.textContent = "Paper";
        compareChoices("handPaper");
        break;

      case "handScissors":
        handImg.src = "assets/img/hand Scissors.png" ;
        handText.textContent = "Scissors";
        compareChoices("handScissors");
        break;
    }
    handImg.style.width = "70px";
  });
});

// cat choices.........................................

function catChoice() {
  // array of cat options
  const catChoices = ["paw Rock", "paw Paper", "paw Scissors"];

  // make a random selection from the array
  const randomNum = Math.floor(Math.random() * 3);

  const pawImg = document.querySelector("#pawImg");
  const pawText = document.querySelector("#pawText");

  // show the choice under its pic
    pawImg.src = `assets/img/${catChoices[randomNum]}.png`;
    pawText.textContent = catChoices[randomNum].replace("paw ","");

  pawImg.style.width = "80px";

  return catChoices[randomNum];
}

// comparing user & cat choices.........................

function compareChoices(userChoice) {
  const catChoicee = catChoice();

  switch (userChoice + catChoicee) {
    case "handRock" + "paw Scissors":
    case "handScissors" + "paw Paper":
    case "handPaper" + "paw Rock":
      win();
      break;
    case "handRock" + "pawPaper":
    case "handScissors" + "paw Rock":
    case "handPaper" + "paw Scissors":
      lose();
      break;
    case "handRock" + "paw Rock":
    case "handScissors" + "paw Scissors":
    case "handPaper" + "paw Paper":
      draw();
      break;
  }
}

// scores..............................................
let userScore = 0;
let catScore = 0;

// win, lose or draw?..................................

const report = document.querySelector("#report > h2");

function win() {
  userScore++;
  document.querySelector("#userScore").textContent = userScore;
  return (report.textContent = "You've aced it!");
}

function lose() {
  catScore++;
  document.querySelector("#catScore").textContent = catScore;
  return (report.textContent = "The cat wins! try again..");
}

function draw() {
  return (report.textContent = "It's a draw.");
}

// timer..............................................

// start the time after a sec
const interval = setInterval(countDown, 1000); 

// 10 min / each min is 60 sec
let time = 1 * 60;

function countDown() {
    time--; 
  let min = Math.floor( time / 60);
  let sec = time % 60;

  // add a 0 for single digit numbers
  if (sec < 10) {
    sec = "0" + sec;
  }
  min = '0' + min;

  // show the min & sec in the page
  const timer = document.querySelector("#timer");
  timer.textContent = `${min}:${sec}`;

  if (timer.textContent === "00:00") {
    // stop the timer
    clearInterval(interval);

    // show the final result
    finalResult()
  }
}

const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");

function finalResult() {
    modal.classList.remove("hidden");   
    modal.style.display = 'flex';   
    overlay.classList.remove("hidden");   

//show the final score
const finalScore = document.querySelector("#finalScore");
finalScore.textContent = userScore ;

const status = document.querySelector("#status");
if (userScore < 10) {
    status.textContent = "There's no hope.." ;
} else if (userScore < 40) {
    status.textContent = "You can do better." ;
} else if (userScore >= 40) {
    status.textContent = "You are lucky!" ;
}
}

const confirm = document.querySelector("#confirm");

confirm.addEventListener('click', ()=>{
// refresh everything
location.reload()
})

