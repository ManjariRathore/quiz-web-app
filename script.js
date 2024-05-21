let questions = [
    {
        question: 'Which HTML tag is used to define an inline style?',
        choice1: '<script>',
        choice2: '<css>',
        choice3: '<style>',
        choice4: '<span>',
        answer: 3,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choice1: 'text-color',
        choice2: 'font-color',
        choice3: 'text-style',
        choice4: 'color',
        answer: 4,
    },
    {
        question: 'Which of the following is the correct way to comment in HTML?',
        choice1: '// Comment',
        choice2: '<!-- Comment -->',
        choice3: '/* Comment */',
        choice4: '<! Comment>',
        answer: 2,
    },
];
let score = 0;
let currentQuestionIndex = 0;

const questionContainer = document.getElementById('question-container');
const choicesContainer = document.getElementById('choices-container');
const questionElement = questionContainer.querySelector('.question');
const choiceButtons = choicesContainer.querySelectorAll('.choice');
const questionNumberElement = document.getElementById('question-number');
const scoreElement = document.getElementById('score');


function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    const choices = [question.choice1, question.choice2, question.choice3, question.choice4];
    for (let i = 0; i < choices.length; i++) {
        choiceButtons[i].innerText = choices[i];
        choiceButtons[i].className = 'choice';
        choiceButtons[i].onclick = () => selectAnswer(i + 1,choiceButtons[i]);
    }

}

function selectAnswer(selectedIndex, buttonElement) {
    const correctIndex = questions[currentQuestionIndex].answer;
    if (selectedIndex === correctIndex) {
        buttonElement.classList.add('correct');
        score++;
    } else {
        buttonElement.classList.add('incorrect');
        choiceButtons[correctIndex - 1].classList.add('correct');
    }
    updateScore();
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            endQuiz(score);
        }
    }, 500);
}

function updateScore() {
    questionNumberElement.innerText = `Question: ${currentQuestionIndex + 2}`;
    scoreElement.innerText = `Score: ${score}`;
}

function endQuiz(s) {
    localStorage.setItem('quizScore', String(score));
    window.location.href = "endPage.html";
}

document.addEventListener('DOMContentLoaded', startQuiz);