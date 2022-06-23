// array of questions
const questions = [
    {
        question: "An array in Javascript is best described as what?",
        choices: ["a. a line with one endpoint", "b. an object that is a container of fish", "c. an object containing only strings", "d. an object that stores a collection of items"],
        answer: "an object that stores a collection of items",
    },
    {
        question: "Which of these help you declare a variable that cannot be redeclared or reassigned",
        choices: ["a. var", "b. const", "c. equals", "d. let"],
        answer: "const"
    },
    {
        question: "Which event happens when the user clicks on an HTML element?",
        choices: ["a. onclick", "b. onmouseover", "c. ontick", "d. onmouseclick"],
        answer: "a. onclick"
    },
    {
        question: "What will best help you during development and debugging by printing content to the debugger?",
        choices: ["a. print()", "b. constipated.log()", "c. StockAverflow", "d. console.log()"],
        answer: "d. console.log()"
    },
    {
        question: "The following refers to a datatype that best represents a binary value.",
        choices: ["a. real;", "b. booleans", "c. strings", "d. numbers"],
        answer: "c. booleans"
    },
    {
        question: "What best describes the DOM?",
        choices: ["a. the highest part of the hierarchy;", "b. the HTML file", "c. an object model", "d. the object-oriented representation of a webpage"],
        answer: "d. the object-oriented representation of a webpage"
    },
    {
        question: "String values must be enclosed within _____.",
        choices: ["a. commas", "b. squiggly brackets", "c. quotes", "d. parentheses"],
        answer: "c. quotes"
    }
    ]
    // referential variables
    var quizHome = document.getElementById("quizHome");
    var startButton = document.getElementById("startButton");
    var quizEnd = document.getElementById("quizEnd")
    var ultimateDiv = document.getElementById("ultimateDiv");
    
    var timer = document.getElementById("timer");
    var timeRemaining = document.getElementById("timeRemaining");

    var questionBox = document.getElementById("questionBox");
    var questionItself = document.getElementById("questionItself");
    var choiceA = document.getElementById("btn0");
    var choiceB = document.getElementById("btn1");
    var choiceC = document.getElementById("btn2");
    var choiceD = document.getElementById("btn3");
    var checkAnswer = document.getElementById("checkAnswer");

    var scoreSheet = document.getElementById("scoreSheet");
    var initialInput = document.getElementById("initialInput");
    var initialOutput = document.getElementById("initialOutput");

    var scoresHigh = document.getElementById("scoresHigh");
    var scoreFinal = document.getElementById("scoreFinal");
    var scoreBack = document.getElementById("scoreBack");
    var scoreClear = document.getElementById("scoreClear"); 
    var scoresHighView = document.getElementById("scoresHighView");
    var scoresHighList = document.getElementById("scoresHighList");
    // extra Variables
    var answerGood = 0;
    var questionNo = 0;
    var questionIndex = 0;

    // functions
   
   // Timer and Quiz start
   var totalTime = 180;
   function newQuiz() {
       questionIndex = 0;
       totalTime = 180;
       timeRemaining.textContent = totalTime;
       initialInput.textContent = "";
   
       quizHome.style.display = "none";
       questionBox.style.display = "block";
       timer.style.display = "block";
       quizEnd.style.display = "none";
   
       var startTimer = setInterval(function() {
           totalTime--;
           timeRemaining.textContent = totalTime;
           if(totalTime <= 0) {
               clearInterval(startTimer);
               if (questionIndex < questions.length - 1) {
                   gameOver();
               }
           }
       },1000);
   
       showQuiz();
   };
   
   // Present Questions
   function showQuiz() {
       nextQuestion();
   }
   
   function nextQuestion() {
       questionItself.textContent = questions[questionIndex].question;
       choiceA.textContent = questions[questionIndex].choices[0];
       choiceB.textContent = questions[questionIndex].choices[1];
       choiceC.textContent = questions[questionIndex].choices[2];
       choiceD.textContent = questions[questionIndex].choices[3];
   }
   
   // grade the answer after it is answered
   function gradeAnswer(answer) {
   
       var lineBreak = document.getElementById("lineBreak");
       lineBreak.style.display = "block";
       checkAnswer.style.display = "block";
   
       if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
           // if good, + 1
           answerGood++;
           checkAnswer.textContent = "Correct!";
       } else {
           // if bad, -10
           totalTime -= 10;
           timeRemaining.textContent = totalTime;
           checkAnswer.textContent = "Incorrect! The correct answer is: " + questions[questionIndex].answer;
       }
   
       questionIndex++;
       // continue so long as there are questions
       if (questionIndex < questions.length) {
           nextQuestion();
       } else {
           // if out of content, gameOver
           gameOver();
       }
   }
   
   function chooseA() { gradeAnswer(0); }
   
   function chooseB() { gradeAnswer(1); }
   
   function chooseC() { gradeAnswer(2); }
   
   function chooseD() { gradeAnswer(3); }
   
   // function to initiate game over
   function gameOver() {
       scoreSheet.style.display = "block";
       questionBox.style.display = "none";
       quizHome.style.display = "none";
       timer.style.display = "none";
       quizEnd.style.display = "block";
   
       // show final score
       scoreFinal.textContent = correctAns;
   }
   
   // enter initial and store highscore in local storage
   function scoresHighStore(event) {
       event.preventDefault();
   
       // stop function is initial is blank
       if (initialInput.value === "") {
           alert("Please enter your initials!");
           return;
       } 
   
       quizHome.style.display = "none";
       timer.style.display = "none";
       quizEnd.style.display = "none";
       scoreSheet.style.display = "none";
       scoresHigh.style.display = "block";   
   
       // store scores into local storage
       var scoresHighSaved = localStorage.getItem("high scores");
       var scoresArray;
   
       if (scoresHighSaved === null) {
           scoresArray = [];
       } else {
           scoresArray = JSON.parse(scoresHighSaved)
       }
   
       var scoreUser = {
           initials: initialInput.value,
           score: scoreFinal.textContent
       };

       scoresArray.push(scoreUser);
   
       // put into string
       var scoresArrayString = JSON.stringify(scoresArray);
       window.localStorage.setItem("high scores", scoresArrayString);
       
       // show current highscores
       showHighScores();
   }
   
   // function to show high scores
   var i = 0;
   function showHighScores() {
   
       quizHome.style.display = "none";
       timer.style.display = "none";
       questionBox.style.display = "none";
       quizEnd.style.display = "none";
       scoreSheet.style.display = "none";
       scoresHigh.style.display = "block";
   
       var scoresHighSaved = localStorage.getItem("high scores");
   
       // check in local storage
       if (scoresHighSaved === null) {
           return;
       }
       console.log(scoresHighSaved);
   
       var storedHighScores = JSON.parse(scoresHighSaved);
   
       for (; i < storedHighScores.length; i++) {
           var eachNewHighScore = document.createElement("p");
           eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
           scoresHighList.appendChild(eachNewHighScore);
       }
   }
   
// event listeners
   
   startButton.addEventListener("click", newQuiz);
   choiceA.addEventListener("click", chooseA);
   choiceB.addEventListener("click", chooseB);
   choiceC.addEventListener("click", chooseC);
   choiceD.addEventListener("click", chooseD);
   
   initialOutput.addEventListener("click", function(event){ 
       scoresHighStore(event);
   });
   
   scoresHighView.addEventListener("click", function(event) { 
       showHighScores(event);
   });
   
   scoreBack.addEventListener("click", function() {
       quizHome.style.display = "block";
       scoresHigh.style.display = "none";
   });
   
   scoreClear.addEventListener("click", function(){
       window.localStorage.removeItem("high scores");
       scoresHighList.innerHTML = "High Scores Cleared!";
       scoresHighList.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
   });