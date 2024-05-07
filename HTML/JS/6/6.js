const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars"
    },
    {
        question: "Who developed the theory of relativity?",
        answers: ["Isaac Newton", "Galileo Galilei", "Nikola Tesla", "Albert Einstein"],
        correct: "Albert Einstein"
    },
    {
        question: "What is the largest mammal in the world?",
        answers: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        correct: "Blue Whale"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const questionTitle = document.getElementById('question-title');
const answersContainer = document.getElementById('answers-container');
const finalScore = document.getElementById('final-score');

const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    answersContainer.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => handleAnswerClick(answer, button));
        answersContainer.appendChild(button);
    });
}

function handleAnswerClick(selectedAnswer, button) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct;

    button.classList.add(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
        score += 1;
    }

    setTimeout(() => {
        currentQuestionIndex += 1;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScore.textContent = `You scored ${score} out of ${questions.length}!`;
}

function restartQuiz() {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}
