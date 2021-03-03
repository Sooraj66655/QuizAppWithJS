const QuizQA = [
  {
    question: "Q1:What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Hum Tum Main Lucknow",
    c: "Home tool Markup Language",
    d: "Hyperlink Text Markup Language",
    ans: "ans1",
  },
  {
    question: "Q2:Who is making the Web standards?",
    a: "Google",
    b: "Mozila",
    c: "Microsoft",
    d: "The World Wide Web Consortium",
    ans: "ans4",
  },
  {
    question: "Q3:Choose the correct HTML element for the largest heading:",
    a: "heading",
    b: "head",
    c: "h6",
    d: "h1",
    ans: "ans4",
  },
  {
    question: "Q4:What is the correct HTML element for inserting a line break?",
    a: "br",
    b: "break",
    c: "lb",
    d: "borkeLine",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer");
const submit = document.querySelector("#submit");
const shoWScore = document.querySelector("#show_score");
const InnerDiv = document.querySelector(".inner_div");

var questionCount = 0;
var score = 0;
const loadQuestion = () => {
  debugger;

  const questionList = QuizQA[questionCount];
  question.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};
loadQuestion();

const getCheckedAnswer = () => {
  debugger;

  let answer;
  answers.forEach((currentAns) => {
    if (currentAns.checked) {
      answer = currentAns.id;
    }
  });
  return answer;
};
const deselect = () => {
  answers.forEach((currentAns) => {
    currentAns.checked = false;
  });
};
submit.addEventListener("click", () => {
  debugger;
  const checkedAnswer = getCheckedAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === QuizQA[questionCount].ans) {
    score++;
  }
  deselect();
  questionCount++;
  if (questionCount < QuizQA.length) {
    loadQuestion();
  } else {
    shoWScore.innerHTML = `<h1>Your Score is ${score}/${QuizQA.length}
    <button class="btn" onclick="location.reload()">Start Again</button>`;
    shoWScore.classList.remove("score_area");
    InnerDiv.style.display = "none";
  }
  console.log(score);
});
