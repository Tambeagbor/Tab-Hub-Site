// Script.js
const translations = {
  apple: "pomme",
  banana: "banane",
  cat: "chat",
  dog: "chien",
  elephant: "éléphant",
  flower: "fleur",
  grape: "raisin",
  house: "maison",
  icecream: "glace",
  jacket: "veste",
  // Add more words for each letter of the alphabet here
};

const pronunciation = {
  apple: "ˈæpəl",
  banana: "bəˈnænə",
  cat: "kæt",
  dog: "dɔɡ",
  elephant: "ˈɛləfənt",
  flower: "ˈflaʊər",
  grape: "ɡreɪp",
  house: "haʊs",
  icecream: "aɪs kriːm",
  jacket: "ˈdʒækɪt",
  // Add more pronunciations for each word
};

function translateWord(word, targetLanguage) {
  const translatedWord = translations[word.toLowerCase()];
  return translatedWord || "Translation not available";
}

function getPronunciation(word) {
  const wordPronunciation = pronunciation[word.toLowerCase()];
  return wordPronunciation || "Pronunciation not available";
}

function translateText() {
  const inputText = document.getElementById('inputText').value.toLowerCase();
  const rightLanguage = document.getElementById('rightLanguage').value;

  const translatedText = translateWord(inputText, rightLanguage);
  const pronunciationText = getPronunciation(inputText);
  const translationResult = document.getElementById('translationResult');
  translationResult.innerText = translatedText + " (Pronunciation: " + pronunciationText + ")";
}

function startMultipleChoiceGame() {
  // Implement the multiple choice game logic here
  // Generate a word in either French or English and display 3 wrong options and 1 correct option
}

function clearTranslation() {
  const inputText = document.getElementById('inputText');
  const translationResult = document.getElementById('translationResult');

  // Clear the input text and translation result
  inputText.value = '';
  translationResult.innerText = '';
}



// Event listener for the Clear button
document.getElementById('clearBtn').addEventListener('click', clearTranslation);


// Event listener for the Translate button
document.getElementById('translateBtn').addEventListener('click', translateText);

// Event listeners for game button
document.getElementById('multipleChoiceBtn').addEventListener('click', startMultipleChoiceGame);

// Function to toggle visibility of game sections
function toggleGameSection(sectionId) {
  const gameSection = document.getElementById(sectionId);
  gameSection.style.display = gameSection.style.display === 'none' ? 'block' : 'none';
}

// Event listeners for game buttons
document.getElementById('multipleChoiceBtn').addEventListener('click', function () {
  toggleGameSection('multipleChoiceGame');
});

// Questions and Choices for Multiple Choice Game
const multipleChoiceQuestions = [
  {
      question: "What is the French word for 'Apple'?",
      choices: ["Apụl", "Pomme", "Appel", "Jабука"],
      correctAnswer: "Pomme"
  },
  {
      question: "What is the French word for 'Banana'?",
      choices: ["Banaan", "Musa", "Banane", "Ibhanana"],
      correctAnswer: "Banane"
  },
  {
    question: "What is the French word for 'Cat'?",
    choices: ["Qattus", "Ologbo", "Niawu", "Chat"],
    correctAnswer: "Chat"
},
{
  question: "What is the French word for 'Dog'?",
  choices: ["Chien", "Pas", "Hond", "Kare"],
  correctAnswer: "Chien"
},
{
  question: "What is the French word for 'Elephant'?",
  choices: ["Elefante", "Éléphant", "Norsu", "Elefant"],
  correctAnswer: "Éléphant"
},
{
  question: "What is the French word for 'Flower'?",
  choices: ["Flè", "Blodyn", "Fleur", "Blomst"],
  correctAnswer: "Fleur"
},
{
  question: "What is the French word for 'Grape'?",
  choices: ["Усан үзэм", "Amagilebhisi", "Anggur", "Raisin"],
  correctAnswer: "Raisin"
},
{
  question: "What is the French word for 'House'?",
  choices: ["Maison", "Rumah", "Mana", "Ntlo"],
  correctAnswer: "Maison"
},
{
  question: "What is the French word for 'Icecream'?",
  choices: ["Kem", "Glace", "Jäätelö", "Dondurma"],
  correctAnswer: "Glace"
},
{
  question: "What is the French word for 'Jacket'?",
  choices: ["Jakna", "Koti", "Veste", "Kazaka"],
  correctAnswer: "Veste"
},
  // Add more questions and choices as needed
];

let currentQuestionIndex = 0;
const questionContainer = document.getElementById('questionContainer');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextBtn = document.getElementById('nextBtn');
const feedback = document.getElementById('feedback');

function showQuestion() {
  const currentQuestion = multipleChoiceQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = '';

  currentQuestion.choices.forEach((choice, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${String.fromCharCode(97 + index)}. ${choice}`;
      listItem.addEventListener('click', () => checkAnswer(choice));
      choicesElement.appendChild(listItem);
  });

  nextBtn.style.display = 'none';
  feedback.textContent = '';
}
function checkAnswer(selectedChoice) {
  const currentQuestion = multipleChoiceQuestions[currentQuestionIndex];
  if (selectedChoice === currentQuestion.correctAnswer) {
      feedback.textContent = 'Correct!';
      nextBtn.style.display = 'block';
  } else {
      feedback.textContent = 'Try again!';
  }
}
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < multipleChoiceQuestions.length) {
      showQuestion();
  } else {
      questionContainer.innerHTML = '<h2>CONGRADULATIONS!!!</h2>';
  }
}

function toggleGameButton(buttonId, newButtonText) {
  const button = document.getElementById(buttonId);
  button.textContent = newButtonText;
}
// Event listener for Next Question button
nextBtn.addEventListener('click', nextQuestion);

// Event listener for Multiple Choice Game button
document.getElementById('multipleChoiceBtn').addEventListener('click', function () {
  if (this.textContent === 'Start Game') {
      toggleGameSection('multipleChoiceGame');
      toggleGameButton('multipleChoiceBtn', 'End Game');
      currentQuestionIndex = 0;
      showQuestion();
  } else {
      toggleGameSection('multipleChoiceGame');
      toggleGameButton('multipleChoiceBtn', 'Start Game');
  }
});
// Event listener for Sentence Translation Game button
//document.getElementById('sentenceTranslationBtn').addEventListener('click', function () {
//  if (this.textContent === 'Start Game') {
//     toggleGameSection('sentenceTranslationGame');
//      toggleGameButton('sentenceTranslationBtn', 'End Game');
//      currentSentenceIndex = 0;
//      showSentence();
//  } else {
//      toggleGameSection('sentenceTranslationGame');
//      toggleGameButton('sentenceTranslationBtn', 'Start Game');
//  }
//});
