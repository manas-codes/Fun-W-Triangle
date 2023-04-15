const quiz_form = document.querySelector(".quiz-form");
const button = document.querySelector("#submit");
const display = document.querySelector("#output");

const correctAnswer = ["90°", "150°", "no"];
let score = 0; 

function calculate() {
  event.preventDefault();
  score = 0; 
  let index = 0;
  const formresult = new FormData(quiz_form);
  for (let value of formresult.values()) { 
    if (value === correctAnswer[index]) {
      score += 1;
    }
    index++;
  }
  if (score === 0) {
    display.textContent = "You can do better! 👍";
  } else {
    display.textContent = "Your score is " + score +" 🚀";
  }
   
}
button.addEventListener("click", calculate); 

