const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
let countdown = 2;
let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  let questionContainer = document.getElementById("questionsContainer");
  let currentQuestion = questions[currentQuestionIndex];

  questionContainer.innerHTML = "";

  let questionTitle = document.createElement("h1");
  questionTitle.textContent = currentQuestion.question;
  questionContainer.appendChild(questionTitle);

  let answersContainer = document.createElement("div");
  answersContainer.id = "answers";
  questionContainer.appendChild(answersContainer);

  let allAnswers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ];
  allAnswers.sort(() => Math.random() - 0.5);

  allAnswers.forEach(function (answer) {
    let answerButton = document.createElement("button");
    answerButton.textContent = answer;
    answerButton.addEventListener("click", function () {
      handleAnswer(answer);
    });
    answersContainer.appendChild(answerButton);
  });

  let questionNumber = document.createElement("h2");
  questionNumber.innerHTML =
    "QUESTION " + (currentQuestionIndex + 1) + "<span>/10</span>";
  questionContainer.appendChild(questionNumber);
  countdown = 60;
  countdown.reset();
}

function handleAnswer(selectedAnswer) {
  let currentQuestion = questions[currentQuestionIndex];
  let answerButtons = document.querySelectorAll("#answers button");

  answerButtons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === currentQuestion.correct_answer) {
      button.classList.add("verde");
    } else if (button.textContent === selectedAnswer) {
      button.classList.add("rosso");
    }
  });

  if (selectedAnswer === currentQuestion.correct_answer) {
    score++;
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      document.getElementById("countdown").style.display = "none";
      showFinalScore();
    }
  }, 1000);
}

function showFinalScore() {
  let questionContainer = document.getElementById("questionsContainer");
  questionContainer.innerHTML = "";

  let finalMessage = document.createElement("h1");
  finalMessage.textContent = "Quiz Terminato!";
  questionContainer.appendChild(finalMessage);

  /*let scoreMessage = document.createElement("h2");
  scoreMessage.textContent =
    "Hai ottenuto " + score + " su " + questions.length + " domande corrette!";
  questionContainer.appendChild(scoreMessage);*/
}

let secondsElement = document.getElementById("seconds");
let circle = document.querySelector(".progress-ring__circle");
let radius = circle.r.baseVal.value;
let circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  let offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

let timer = setInterval(() => {
  secondsElement.innerHTML = countdown;
  setProgress((countdown / 60) * 100);

  if (countdown === 0) {
    countdown.pause();
  }

  countdown--;
}, 1000);

document.addEventListener("DOMContentLoaded", showQuestion);
