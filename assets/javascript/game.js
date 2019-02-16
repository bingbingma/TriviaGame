//RAP questionS -------------------------------------------------------------->
var rapQuestions = [
  {
    question:
      "Who was recently detained by ICE for allegedly overstaying his UK Visa when in fact he was born in Altanta, Georgia?",
    answers: {
      A: "Offset",
      B: "Quavo",
      C: "Lil' Wayne",
      D: "21 Savage"
    },
    correctAnswer: "D"
  },
  {
    question:
      "What Cardi B song is this lyric from? I like those Balenciagas, the ones that look like socks",
    answers: {
      A: "Bodak Yellow",
      B: "Money",
      C: "I Like it",
      D: "Be Careful"
    },
    correctAnswer: "C"
  },
  {
    question: "Who wrote 'This is America'?",
    answers: {
      A: "36 Mafia",
      B: "Childish Gambino",
      C: "MIGOS",
      D: "Kendrik Lamar"
    },
    correctAnswer: "B"
  },
  {
    question: "Who is in love with the COCO",
    answers: {
      A: "O.T. Genasis",
      B: "Flo Rida",
      C: "Daddy Yankee",
      D: "Rich the Kid"
    },
    correctAnswer: "A"
  },
  {
    question: "What is Busta Rhymes real name? ",
    answers: {
      A: "David Smith",
      B: "Trevor Smith",
      C: "John Smith",
      D: "Anton Smith"
    },
    correctAnswer: "B"
  },
  {
    question:
      "Which album is dedicated to all the teachers that told me I'd never amount to nothin'",
    answers: {
      A: "Born Again",
      B: "Ready to Die",
      C: "Life After Death",
      D: "Duets: The Final Chapter"
    },
    correctAnswer: "B"
  },
  {
    question: "The fashion label Golf Wang is the brainchild of which artist?",
    answers: {
      A: "Kendrik Lamar",
      B: "Kanye West",
      C: "Tyler, the Creator",
      D: "Future"
    },
    correctAnswer: "C"
  },
  {
    question: "Which artist most represents the 6",
    answers: {
      A: "Kid Cudi",
      B: "The Weeknd",
      C: "Future",
      D: "Drake"
    },
    correctAnswer: "D"
  },
  {
    question: "Who is refered to as the Queen Bee of Rap",
    answers: {
      A: "Cardi B",
      B: "Lil' Kim",
      C: "Nicki Minaj",
      D: "Azalea Banks"
    },
    correctAnswer: "B"
  },
  {
    question: "Which group's second studio album was The Low End Theory",
    answers: {
      A: "Run DMC",
      B: "Tribe Called Quest",
      C: "The Electromagnetic MCs",
      D: "NWA"
    },
    correctAnswer: "B"
  },
  {
    question: "Who repped the west coast but was actually from Brooklyn",
    answers: {
      A: "Notorious B.I.G.",
      B: "2PAC",
      C: "Big L",
      D: "JayZ"
    },
    correctAnswer: "B"
  },
  {
    question: "Who is a good kid from a M.A.A.D. City",
    answers: {
      A: "Snoop Dogg",
      B: "Eazy-E",
      C: "Wacka Flacka Flame",
      D: "Kendrick Lamar"
    },
    correctAnswer: "D"
  },
  {
    question: "Who wants to be buried in a Gucci store when they die",
    answers: {
      A: "2 Chainz",
      B: "E-40",
      C: "Travis Scott",
      D: "Future"
    },
    correctAnswer: "A"
  },
  {
    question: "Whose white X6 looks like a Panda",
    answers: {
      A: "Future",
      B: "Rae Stremmud",
      C: "Desiigner",
      D: "Kanye West"
    },
    correctAnswer: "C"
  }
];

//QUIZ VAR SECTION ---------------------------------->

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");

//START BUTTON ----------------------------------------->
// click the button to start the game

startButton.onclick = function() {
  //show questions on click
  showQuestions(rapQuestions, quizContainer);
  //START A TIMER FOR 200 SECONDS
  $("#time-left").html("<h2>TIME LEFT</h2>");

  var timeLeft = 200;
  var interval = setInterval(function() {
    timeLeft--;
    $("#time-left").html("<h2> TIME LEFT: " + timeLeft + " SECONDS </h2>");
    if (timeLeft === -1) {
      alert("GAME OVER MAN");
      clearInterval(interval);
      timeLeft = 200;
    }
  }, 1000);

  console.log("10 seconds left");
  // in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
};

//QUIZ FUNCTIONS  ---------------------------------->
function showQuestions(questions, quizContainer) {
  // we'll need a place to store the output and the answer choices
  var output = [];
  var answers;

  // for each question...
  for (var i = 0; i < questions.length; i++) {
    // first reset the list of answers
    answers = [];

    // for each available answer...
    for (letter in questions[i].answers) {
      // ...add an html radio button
      answers.push(
        "<label>" +
          '<input type="radio" name="question' +
          i +
          '" value="' +
          letter +
          '">' +
          letter +
          ": " +
          questions[i].answers[letter] +
          "&nbsp;&nbsp;" +
          "</label>"
      );
    }

    // add this question and its answers to the output
    output.push(
      '<div class="question">' +
        questions[i].question +
        "</div>" +
        '<div class="answers">' +
        answers.join("") +
        "</div>"
    );
  }

  // finally combine our output list into one string of html and put it on the page
  quizContainer.innerHTML = output.join("");
}

// show results
function showResults(questions, quizContainer, resultsContainer) {
  // gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll(".answers");

  // keep track of user's answers
  var userAnswer = "";
  var numCorrect = 0;

  // for each question...
  for (var i = 0; i < questions.length; i++) {
    // find selected answer
    userAnswer = (
      answerContainers[i].querySelector(
        "input[name=question" + i + "]:checked"
      ) || {}
    ).value;

    // if answer is correct
    if (userAnswer === questions[i].correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[i].style.color = "green";
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[i].style.color = "red";
    }
  }

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
}

// on submit, show results
submitButton.onclick = function() {
  showResults(rapQuestions, quizContainer, resultsContainer);
};
