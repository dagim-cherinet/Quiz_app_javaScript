const data = [
  {
    question: "What does HTML stands for?",
    correct_answer: "a",
    theChoices: [
      {
        a: "Hyper Text Markup Language",
        b: "Hyper Text Transfer Protocol",
        c: "Hyper Text Markdown Language",
        d: "Hyper Text Markup Logic",
      },
    ],
  },
  {
    question: "On which computer hardware device is the BIOS chip located?",
    correct_answer: "c",
    theChoices: [
      {
        a: "Hard Disk Drive",
        b: "Central Processing Unit",
        c: "Motherboard",
        d: "Graphics Processing Unit",
      },
    ],
  },

  {
    question: "What was the first commerically available computer processor?",
    correct_answer: "a",
    theChoices: [
      { a: "Intel 4004", b: "Intel 486SX", c: "TMS 1000", d: "AMD AM386" },
    ],
  },

  {
    question: "In the server hosting industry IaaS stands for...",
    correct_answer: "d",
    theChoices: [
      {
        a: "Internet as a Service",
        b: "Internet and a Server",

        c: "Infrastructure as a Server",
        d: "Infrastructure as a Service",
      },
    ],
  },
  {
    question: "The name of technology company HP stands for what?",
    correct_answer: "b",
    theChoices: [
      {
        a: "Howard Packmann",
        b: "Hewlett-Packard",
        c: "Husker-Pollosk",
        d: "Hellman-Pohl",
      },
    ],
  },
];
const question = document.getElementById("question");
const a = document.getElementById("a_label");
const b = document.getElementById("b_label");
const c = document.getElementById("c_label");
const d = document.getElementById("d_label");

// const radio_a = document.getElementById("a");
// const radio_b = document.getElementById("b");
// const radio_c = document.getElementById("c");
// const radio_d = document.getElementById("d");
const quizContainer = document.getElementById("quiz-container");
const result = document.getElementById("score__board1");
let score = document.createElement("h3");
let final__result = document.createElement("h1");
let retry__button = document.createElement("button");
retry__button.classList.add("btn");
retry__button.innerText = "Retry";
let currentQuestion = 0;
let correctAnswerCounter = 0;

const loadQuestion = () => {
  //to deselect the radio buttons -> to reload new question card
  let choices = [...document.querySelectorAll("input:checked")];
  if (choices) {
    choices.map((checked) => (checked.checked = false));
  }

  let correctChoice = data[currentQuestion].correct_answer;
  let multipleChoice = data[currentQuestion].theChoices;
  question.innerText = `${currentQuestion + 1} - ${
    data[currentQuestion].question
  }`;
  a.innerText = multipleChoice[0].a;
  b.innerText = multipleChoice[0].b;
  c.innerText = multipleChoice[0].c;
  d.innerText = multipleChoice[0].d;

  // radio_a.setAttribute("value", multipleChoice[0]);
  // radio_b.setAttribute("value", multipleChoice[1]);
  // radio_c.setAttribute("value", multipleChoice[2]);
  // radio_d.setAttribute("value", multipleChoice[3]);
};
loadQuestion();

const handleSubmit = () => {
  let answer = document.querySelector("input:checked");

  console.log(data[currentQuestion].question);

  if (answer) {
    console.log(answer.value);
    if (answer.id == data[currentQuestion].correct_answer) {
      console.log("correct answer");
      correctAnswerCounter++;

      let score = document.createElement("h3");
      score.innerText = `${currentQuestion + 1} - correct answer`;
      result.appendChild(score);
      currentQuestion++;
    } else {
      let score = document.createElement("h3");
      score.innerText = `${currentQuestion + 1} - incorrect answer`;
      result.appendChild(score);
      currentQuestion++;
    }
  } else {
    alert("please enter your answer!");
  }

  if (currentQuestion < data.length) {
    loadQuestion();
  } else {
    final__result.innerText = `you have scored ${correctAnswerCounter} out of 5`;
    result.appendChild(final__result);
    result.appendChild(retry__button);
    document.getElementById("btn_primary").disabled = true;

    //to deselect the radio buttons -> to reload new question card
    let choices = [...document.querySelectorAll("input:checked")];
    if (choices) {
      choices.map((checked) => (checked.checked = false));
    }
    let radios = [...document.querySelectorAll("input")];
    radios.map((radio) => (radio.disabled = true));
  }
};
retry__button.addEventListener("click", () => {
  reset();
});
const reset = () => {
  currentQuestion = 0;
  correctAnswerCounter = 0;
  document.getElementById("btn_primary").disabled = false;
  let radios = [...document.querySelectorAll("input")];
  radios.map((radio) => (radio.disabled = false));
  result.innerHTML = "";
  loadQuestion();
};
