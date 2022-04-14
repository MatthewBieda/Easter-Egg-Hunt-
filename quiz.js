const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "What does the rabbit from Alice in wonderland always carry? ",
    answers: {
      a: "A pocket watch ",
      b: "A carrot ",
      c: "An egg "
    },
    correctAnswer: "a"
  },
  {
    question: "Which flower is considered an Easter symbol?",
    answers: {
      a: "Lavendar",
      b: "Lily",
      c: "Daisy"
    },
    correctAnswer: "b"
  },
  {
    question: "What animal is most commonly associated with Easter?",
    answers: {
      a: "A bunny",
      b: "A snake",
      c: "A frog",
    },
    correctAnswer: "a"
  },
  {
    question: "Which animal is used in place of the Bunny in Australia?",
    answers: {
      a: "Playpus",
      b: "Dingo",
      c: "Bilby",
    },
    correctAnswer: "c"
  },
  {
    question: "Which 40’s Disney film includes a fictional rabbit called Thumper?",
    answers: {
      a: "Aladin",
      b: "Frozen",
      c: "Bambi",
    },
      correctAnswer: "c"
    },
    {
      question: "Which chore gives is said to give bad luck if done on Good Friday? ",
      answers: {
        a: "Washing clothes",
        b: "sweeping",
        c: "setting the table",
      },
        correctAnswer: "a"
      },
      {
        question: "Easter Sunday is also called what?",
        answers: {
          a: "Resurrection Day",
          b: "Judgement Day ",
          c: "The day",
        },
          correctAnswer: "a"
        },
        {
        question: "Which part of the cocoa plant is chocolate made from?",
        answers: {
          a: "Roots",
          b: "Beans",
          c: "Leaf",
      },
        correctAnswer: "b"
      },
      {
        question: "What does the cross represent on the top of a hot cross bun?",
        answers: {
          a: "Angry bakers",
          b: "Treasure inside",
          c: "The crucification of Jesus",
      },
        correctAnswer: "c"
      },
      {
        question: "In which ocean is Easter Island?",
        answers: {
          a: "Pacific Ocean",
          b: "Atlantic Ocean",
          c: "Arctic Ocean",
      },
        correctAnswer: "a"
      },
];

function buildQuiz(){
  const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      const answers = [];

      for(letter in currentQuestion.answers){

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  quizContainer.innerHTML = output.join('');
}

function showResults(){

  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach( (currentQuestion, questionNumber) => {

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
    

      answerContainers[questionNumber].style.color = 'lightgreen';
    }

    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
