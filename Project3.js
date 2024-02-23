
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Define quiz questions and answers as an array of objects
var quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    }
];


var score = 0; // Initialize score



let currentQuestionIndex = 0;

const displayRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    const randomQuestion = quizQuestions[randomIndex];
    console.log(randomQuestion.question);
    randomQuestion.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
    rl.question('Enter your answer (by option number): ', (userAnswer) => {
        checkAnswer(parseInt(userAnswer), randomQuestion.answer);
    });
};

const checkAnswer = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer || userAnswer - 1 === correctAnswer) {
        console.log("Correct!");
        score++;
    } else {
        console.log("Incorrect!");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayRandomQuestion();
    } else {
        endQuiz();
        rl.close();
    }
};

const endQuiz = () => {
    console.log(`Quiz ended. Your score: ${score}/${quizQuestions.length}`);
};

displayRandomQuestion();