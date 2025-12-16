/* =========================
   DATA
========================= */

const questions = [
  {
    type: "image",
    src: "image1_ai.jpg",
    question: "Is deze afbeelding echt of AI?",
    answer: "AI"
  },
  {
    type: "image",
    src: "image2_echt.jpg",
    question: "Is deze afbeelding echt of AI?",
    answer: "Echt"
  },
  {
    type: "image",
    src: "image3_echt.jpg",
    question: "Is deze afbeelding echt of AI?",
    answer: "Echt"
  },
  {
    type: "image",
    src: "image4_ai.jpg",
    question: "Is deze afbeelding echt of AI?",
    answer: "AI"
  },
  {
    type: "image",
    src: "image5_ai.jpg",
    question: "Is deze afbeelding echt of AI?",
    answer: "AI"
  },
  {
    type: "text",
    content: "Vandaag regent het in Parijs en de Eiffeltoren wordt schoongemaakt.",
    question: "Is deze tekst echt of AI?",
    answer: "Echt"
  },
  {
    type: "text",
    content: "Een nieuwe AI-tool kan automatisch huiswerk voor leerlingen maken.",
    question: "Is deze tekst echt of AI?",
    answer: "AI"
  }
];

/* =========================
   GAME STATE
========================= */

let current = 0;
let score = 0;

/* =========================
   AUDIO
========================= */

function playWrongSound() {
  const sound = new Audio("650842__andreas__wrong-answer-buzzer.mp3");
  sound.volume = 0.5;
  sound.play();
}

function startMusic() {
  const music = document.getElementById("bg-music");
  if (music && music.paused) {
    music.volume = 0.3;
    music.play();
  }
}

/* =========================
   MENU
========================= */

function showMenu() {
  hideHomeButton();
  document.getElementById("question-container").innerHTML = "";

  document.getElementById("menu-container").innerHTML = `
    <div class="menu">
      <button onclick="startGame()">Spelen</button>
      <button onclick="showInstructions()">Uitleg</button>
      <button onclick="showOptions()">Opties</button>
      <button onclick="exitGame()">Afsluiten</button>
    </div>
  `;
}

function showHomeButton() {
  document.getElementById("home-button-container").innerHTML = `
    <button class="home-button" onclick="showMenu()">
      <img src="home.png" alt="home">
    </button>
  `;
}

function hideHomeButton() {
  document.getElementById("home-button-container").innerHTML = "";
}

/* =========================
   GAME FLOW
========================= */

function startGame() {
  startMusic();
  current = 0;
  score = 0;
  document.getElementById("menu-container").innerHTML = "";
  showHomeButton();
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  const container = document.getElementById("question-container");

  let html = `<h2>${q.question}</h2>`;

  if (q.type === "image") {
    html += `<img src="${q.src}" alt="vraag">`;
  } else {
    html += `<p class="text-question">${q.content}</p>`;
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

  if (choice === q.answer) {
    score++;
    showMessage("Correct!");
  } else {
    playWrongSound();
    showMessage("Fout!");
  }
}

function showMessage(text) {
  const popup = document.createElement("div");
  popup.className = "message-popup";
  popup.innerText = text;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
    nextQuestion();
  }, 2000);
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById("question-container").innerHTML = `
    <h2>Klaar!</h2>
    <p>Je score: ${score} / ${questions.length}</p>
    <button onclick="showMenu()">Terug naar menu</button>
  `;
}

/* =========================
   EXTRA SCHERMEN
========================= */

function showInstructions() {
  showHomeButton();
  document.getElementById("menu-container").innerHTML = "";
  document.getElementById("question-container").innerHTML = `
    <h2>Uitleg</h2>
    <p>
      In deze game probeer je te raden of een afbeelding of tekst
      door AI is gemaakt of echt is.
      Let goed op details!
    </p>
  `;
}

function showOptions() {
  showHomeButton();
  document.getElementById("menu-container").innerHTML = "";
  document.getElementById("question-container").innerHTML = `
    <h2>Opties</h2>
    <p>(Hier kun je later instellingen toevoegen)</p>
  `;
}

function exitGame() {
  document.getElementById("menu-container").innerHTML = "";
  document.getElementById("question-container").innerHTML = `
    <h2>Tot ziens 👋</h2>
    <p>Sluit het tabblad om te stoppen.</p>
  `;
}

/* =========================
   START
========================= */

showMenu();
