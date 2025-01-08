const quizData = {
  sports: [
    {
      question: "Which country has won the most FIFA World Cups?",
      options: ["Brazil", "Germany", "Italy", "Argentina"],
      answer: "Brazil",
    },
    {
      question: "Who holds the record for the most Olympic gold medals in history?",
      options: ["Michael Phelps", "Usain Bolt", "Carl Lewis", "Mark Spitz"],
      answer: "Michael Phelps",
    },
    {
      question: "What is the regulation height of a basketball hoop?",
      options: ["9 feet", "10 feet", "11 feet", "12 feet"],
      answer: "10 feet",
    },
    {
      question: "Which sport is known as 'the gentleman's game'?",
      options: ["Cricket", "Tennis", "Golf", "Polo"],
      answer: "Cricket",
    },
    {
      question: "What is the maximum score in a single frame of bowling?",
      options: ["300", "150", "400", "250"],
      answer: "300",
    },
  ],
  scienceAndTechnology: [
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Pb", "Fe"],
      answer: "Au",
    },
    {
      question: "What is the speed of light in a vacuum?",
      options: ["299,792 km/s", "150,000 km/s", "1,000,000 km/s", "99,000 km/s"],
      answer: "299,792 km/s",
    },
    {
      question: "Who proposed the theory of general relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
      answer: "Albert Einstein",
    },
    {
      question: "Which element has the atomic number 1?",
      options: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
      answer: "Hydrogen",
    },
    {
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Central Power Unit", "Core Processing Unit", "Computer Processing Unit"],
      answer: "Central Processing Unit",
    },
  ],
  entertainment: [
    {
      question: "Who directed the movie 'Inception'?",
      options: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"],
      answer: "Christopher Nolan",
    },
    {
      question: "Which band released the album 'Abbey Road'?",
      options: ["The Beatles", "Pink Floyd", "The Rolling Stones", "Led Zeppelin"],
      answer: "The Beatles",
    },
    {
      question: "Who played Jack in 'Titanic'?",
      options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Johnny Depp"],
      answer: "Leonardo DiCaprio",
    },
    {
      question: "What is the highest-grossing film of all time (as of 2025)?",
      options: ["Avatar", "Avengers: Endgame", "Titanic", "The Lion King"],
      answer: "Avatar",
    },
    {
      question: "Who created the character Harry Potter?",
      options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "Stephen King"],
      answer: "J.K. Rowling",
    },
  ],
  mathsAndLogic: [
    {
      question: "What is the value of Pi (π) to two decimal places?",
      options: ["3.14", "3.15", "3.12", "3.16"],
      answer: "3.14",
    },
    {
      question: "What is the square root of 144?",
      options: ["10", "12", "14", "16"],
      answer: "12",
    },
    {
      question: "What is 7 + 3 * 2?",
      options: ["20", "13", "17", "10"],
      answer: "13",
    },
    {
      question: "What is 100 in binary?",
      options: ["1100100", "1001001", "1010101", "1110010"],
      answer: "1100100",
    },
    {
      question: "What is the Fibonacci sequence's first number?",
      options: ["0", "1", "2", "3"],
      answer: "0",
    },
  ],
  historyAndGeography: [
    {
      question: "Who was the first president of the United States?",
      options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
      answer: "George Washington",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["Japan", "China", "South Korea", "India"],
      answer: "Japan",
    },
    {
      question: "What year did World War II end?",
      options: ["1945", "1939", "1918", "1950"],
      answer: "1945",
    },
    {
      question: "Which desert is the largest in the world?",
      options: ["Sahara", "Gobi", "Kalahari", "Arctic"],
      answer: "Sahara",
    },
    {
      question: "What is the capital of Canada?",
      options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
      answer: "Ottawa",
    },
  ],
  literatureAndArts: [
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      answer: "William Shakespeare",
    },
    {
      question: "The Mona Lisa was painted by which artist?",
      options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
      answer: "Leonardo da Vinci",
    },
    {
      question: "Who wrote the novel '1984'?",
      options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Ernest Hemingway"],
      answer: "George Orwell",
    },
    {
      question: "What art style is Salvador Dalí known for?",
      options: ["Surrealism", "Impressionism", "Cubism", "Abstract"],
      answer: "Surrealism",
    },
    {
      question: "Which epic poem was written by Homer?",
      options: ["The Iliad", "The Divine Comedy", "Beowulf", "Paradise Lost"],
      answer: "The Iliad",
    },
  ],
  healthAndLifestyle: [
    {
      question: "How many hours of sleep is recommended for adults?",
      options: ["7-9 hours", "5-6 hours", "10-12 hours", "6-7 hours"],
      answer: "7-9 hours",
    },
    {
      question: "Which vitamin is produced when the skin is exposed to sunlight?",
      options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin E"],
      answer: "Vitamin D",
    },
    {
      question: "What is the body's largest organ?",
      options: ["Skin", "Liver", "Heart", "Lungs"],
      answer: "Skin",
    },
    {
      question: "What is the average normal body temperature in Fahrenheit?",
      options: ["98.6°F", "96.8°F", "100.4°F", "97.5°F"],
      answer: "98.6°F",
    },
    {
      question: "What is BMI short for?",
      options: ["Body Mass Index", "Body Muscle Indicator", "Bone Mass Index", "Body Measurement Index"],
      answer: "Body Mass Index",
    },
  ],
  popCulture: [
    {
      question: "What is the name of the coffee shop in 'Friends'?",
      options: ["Central Perk", "Coffee House", "The Bean", "Java Stop"],
      answer: "Central Perk",
    },
    {
      question: "Which superhero is known as the 'Caped Crusader'?",
      options: ["Batman", "Superman", "Spider-Man", "Iron Man"],
      answer: "Batman",
    },
    {
      question: "Which artist is known as the 'King of Pop'?",
      options: ["Michael Jackson", "Elvis Presley", "Prince", "Justin Timberlake"],
      answer: "Michael Jackson",
    },
    {
      question: "In which year did the first iPhone launch?",
      options: ["2007", "2005", "2008", "2010"],
      answer: "2007",
    },
    {
      question: "What streaming service is known for shows like 'Stranger Things'?",
      options: ["Netflix", "Hulu", "Amazon Prime", "Disney+"],
      answer: "Netflix",
    },
  ],
};

let categoryContainer = document.querySelector(".category-container");
let quizContainer = document.querySelector(".quiz-container");
let questionElement = document.querySelector(".quiz-container .question");
let optionsContainer = document.querySelector(".quiz-container .option");
let nextButton = document.querySelector(".quiz-container button");

let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;

// Handle category selection
document.querySelectorAll(".card").forEach((card, index) => {
  card.addEventListener("click", () => {
    const categories = Object.keys(quizData);
    currentCategory = categories[index];
    console.log(`Selected Category: ${currentCategory}`); // Debugging line
    startQuiz();
  });
});

// Start quiz
function startQuiz() {
  categoryContainer.style.display = "none";
  quizContainer.style.display = "flex";
  nextButton.style.display = "none";
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

// Show question
function showQuestion() {
  const currentQuestion = quizData[currentCategory][currentQuestionIndex];
  questionElement.textContent = currentQuestionIndex + 1 + ". " + currentQuestion.question;

  // Clear old options
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const optionDiv = document.createElement("div");
    optionDiv.textContent = option;
    optionDiv.classList.add("option-item");
    optionDiv.addEventListener("click", () => selectOption(optionDiv, option));
    optionsContainer.appendChild(optionDiv);
  });

  // Hide the "Next" button initially until an option is selected
  nextButton.style.display = "none";
}

// Handle option selection
function selectOption(optionDiv, selectedOption) {
  const currentQuestion = quizData[currentCategory][currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion.answer;

  // Highlight selected option
  if (isCorrect) {
    optionDiv.style.backgroundColor = "#24c477";
    score++;
  } else {
    optionDiv.style.backgroundColor = "#ed6464";
    // Highlight the correct answer
    [...optionsContainer.children].forEach((child) => {
      if (child.textContent === currentQuestion.answer) {
        child.style.backgroundColor = "#24c477";
      }
    });
  }

  // Disable all options after selection
  [...optionsContainer.children].forEach((child) => {
    child.style.pointerEvents = "none"; // Disable further clicks
  });

  // Show the "Next" button after selection
  nextButton.style.display = "block";
}

// Handle "Next" button
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData[currentCategory].length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

// End quiz
function endQuiz() {
  quizContainer.innerHTML = `
    <p class="score">Your Score: ${score} / ${quizData[currentCategory].length}</p>
    <button class="restart-btn">Restart</button>
  `;

  document.querySelector(".restart-btn").addEventListener("click", restartQuiz);
}

// Restart quiz
function restartQuiz() {
  // Reset state
  currentCategory = "";
  currentQuestionIndex = 0;
  score = 0;

  // Reset UI
  categoryContainer.style.display = "flex";
  quizContainer.style.display = "none";

  // Restore quiz content and reinitialize
  quizContainer.innerHTML = `
    <p class="question"></p>
    <div class="option"></div>
    <button style="display: none;">Next</button>
  `;

  // Re-initialize DOM elements
  questionElement = document.querySelector(".quiz-container .question");
  optionsContainer = document.querySelector(".quiz-container .option");
  nextButton = document.querySelector(".quiz-container button");
}
