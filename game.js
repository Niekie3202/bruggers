const questions = [
  {
    type: "image",
    src: "image1_ai.jpg",
    question: "Is deze afbeelding AI of echt?",
    answer: "AI",
    explanation: "Correct!"
  },
  {
    type: "image",
    src: "image2_echt.jpg",
    question: "Is deze afbeelding AI of echt?",
    answer: "Echt",
    explanation: "Correct!",
  },
  {
    type: "image",
    src: "image3_echt.jpg",
    question: "Is deze afbeelding AI of echt?",
    answer: "Echt",
    explanation: "Correct!",
  },
  {
    type: "image",
    src: "image4_ai.jpg",
    question: "Is deze afbeelding AI of echt?",
    answer: "AI",
    explanation: "Correct!",
  },
  {
    type: "image",
    src: "image5_ai.jpg",
    question: "Is deze afbeelding AI of echt?",
    answer: "AI",
    explanation: "Correct!",
  },
  {
    type: "text",
    content: "Vandaag regent het in Parijs en de Eiffeltoren wordt schoongemaakt.",
    question: "Is deze tekst AI of echt?",
    answer: "Real",
    explanation: "Correct! Deze tekst komt uit een betrouwbare bron."
  },
  {
    type: "text",
    content: "Een nieuwe AI-tool kan automatisch huiswerk voor leerlingen maken.",
    question: "Is deze tekst AI of echt?",
    answer: "AI",
    explanation: "Correct! Dit is een voorbeeld van AI-gegenereerde content."
  }
];

let current = 0;
let score = 0;

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
        <button onclick="checkAnswer('Real')">Real</button>
        <button onclick="checkAnswer('AI')">AI</button>
    </div>
`;
  container.innerHTML = html;
}

function checkAnswer(choice) {
  const q = questions[current];0
  if(choice === q.answer) {0
    alert(q.explanation);0
    score++;
  } else {
    alert("Fout! " + q.explanation);
  }
  current++;
  if(current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question-container").innerHTML = `<h2>Einde! Je score: ${score}/${questions.length}</h2>`;
  }
}

showQuestion();
