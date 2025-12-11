const questions = [
  {
    type: "image",
    src: "image1_ai.jpg",
    question: "Is deze afbeelding echt of AI?",
    answer: "AI",
    correctExplanation: "Correct!",
    wrongExplanation: "Incorrect!"
  },
  {
    type: "image",
    src: "image2_echt.jpg",
    question: "Is deze afbeelding echt of AI?",
    answer: "Echt",
    correctExplanation: "Correct!",
    wrongExplanation: "Incorrect!"
  },
  {
    type: "image",
    src: "image3_echt.jpg",
    question: "Is deze afbeelding echt of AI?",
    answer: "Echt",
    correctExplanation: "Correct!",
    wrongExplanation: "Incorrect!"
  },
  {
    type: "image",
    src: "image4_ai.jpg",
    question: "Is deze afbeelding echt of AI?",
    answer: "AI",
    correctExplanation: "Correct!",
    wrongExplanation: "Incorrect!"
  },
  {
    type: "image",
    src: "image5_ai.jpg",
    question: "Is deze afbeelding echt of AI?",
    answer: "AI",
    correctExplanation: "Correct!",
    wrongExplanation: "Incorrect!"
  },
  {
    type: "text",
    content: "Vandaag regent het in Parijs en de Eiffeltoren wordt schoongemaakt.",
    question: "Is deze tekst echt of AI?",
    answer: "Echt",
    correctExplanation: "Correct!",
    wrongExplanation: "Incorrect!"
  },
  {
    type: "text",
    content: "Een nieuwe AI-tool kan automatisch huiswerk voor leerlingen maken.",
    question: "Is deze tekst echt of AI?",
    answer: "AI",
    correctExplanation: "Correct!",
    wrongExplanation: "Incorrect!"
  }
];

let current = 0;
let score = 0;
let gameStarted = false;

function showHomeButton() {
  const homeButtonContainer = document.getElementById("home-button-container");
  homeButtonContainer.innerHTML = `<button class="home-button" onclick="showMenu()"><img src="home.png" alt="home"></button>`;
}

function hideHomeButton() {
  document.getElementById("home-button-container").innerHTML = "";
}

function showMenu() {
  hideHomeButton();
  const menuContainer = document.getElementById("menu-container");
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";
  menuContainer.innerHTML = `
    <div style="margin-top: 80px;">
      <button onclick="startGame()">Spelen</button>
      <button onclick="showInstructions()">Uitleg</button>
    </div>
  `;
}

function startGame() {
  gameStarted = true;
  document.getElementById("menu-container").innerHTML = "";
  current = 0;
  score = 0;
  showHomeButton();
  showQuestion();
}

function showInstructions() {
  document.getElementById("menu-container").innerHTML = "";
  showHomeButton();
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <div style="margin: 40px; text-align: left; max-width: 600px; margin-left: auto; margin-right: auto;">
      <h2>Uitleg_titel</h2>
      <p>Paragraaf</p>
    </div>
  `;
}

function showMessage(message) {
  const messageBox = document.createElement("div");
  messageBox.className = "message-popup";
  messageBox.innerHTML = `<p>${message}</p>`;
  document.body.appendChild(messageBox);
  
  setTimeout(() => {
    messageBox.remove();
    continueGame();
  }, 2000);
}

function continueGame() {
  current++;
  if(current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question-container").innerHTML = `<h2>Einde! Je score: ${score}/${questions.length}</h2>`;
  }
}

function showQuestion() {
  const q = questions[current];
  const container = document.getElementById("question-container");
  let html = `<h2>${q.question}</h2>`;
  if(q.type === "image") {
    html += `<img src="${q.src}" alt="vraag afbeelding">`;
  } else {
    html += `<p>${q.content}</p>`;
  }
  html += `
    <div class="button-row">
        <button onclick="checkAnswer('Echt')">Echt</button>
        <button onclick="checkAnswer('AI')">AI</button>
    </div>
`;
  container.innerHTML = html;
}

function checkAnswer(choice) {
  const q = questions[current];
  if(choice === q.answer) {
    score++;
    showMessage(q.correctExplanation);
  } else {
    showMessage(q.wrongExplanation);
  }
}

showMenu();