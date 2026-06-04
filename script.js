let cards = [
  { q: "What is HTML?", a: "Markup language for web pages" },
  { q: "What is CSS?", a: "Styles the design of web pages" },
  { q: "What is JavaScript?", a: "Makes web pages interactive" },
  { q: "What is DOM?", a: "Document Object Model" },
  { q: "What is API?", a: "Communication between systems" }
];

let index = 0;

function showCard() {
  document.getElementById("question").innerText = cards[index].q;
  document.getElementById("answer").innerText = cards[index].a;
  document.getElementById("answer").classList.add("hidden");
}

function showAnswer() {
  document.getElementById("answer").classList.remove("hidden");
}

function nextCard() {
  index = (index + 1) % cards.length;
  showCard();
}

function prevCard() {
  index = (index - 1 + cards.length) % cards.length;
  showCard();
}

function addCard() {
  let q = document.getElementById("newQ").value;
  let a = document.getElementById("newA").value;

  if (!q || !a) {
    alert("Please enter both question and answer");
    return;
  }

  cards.push({ q, a });

  document.getElementById("newQ").value = "";
  document.getElementById("newA").value = "";

  alert("Flashcard added successfully!");
}

showCard();