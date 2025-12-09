const questions = [
  {
    type: "image",
    src: "ai_image1.jpg",
    question: "Is dit AI of echt?",
    answer: "AI",
    explanation: "Correct! Deze afbeelding is door AI gemaakt vanwege de onnatuurlijke handen."
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
  html += `<button onclick="checkAnswer('Real')">Real</button>
           <button onclick="checkAnswer('AI')">AI</button>`;
  container.innerHTML = html;
}

function checkAnswer(choice) {
  const q = questions[current];
  if(choice === q.answer) {
    alert(q.explanation);
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
