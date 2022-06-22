// array of questions
const questions = [
    {
        question: "An array in Javascript is best described as what?",
        choices: ["a. a line with one endpoint", "b. an object that is a container of fish", "c. an object containing only strings", "d. an object that stores a collection of items"],
        answer: "an object that stores a collection of items",
    },
    {
        question: "Which of these help you declare a variable that cannot be redeclared or reassigned"
        choices: ["a. var", "b. const", "c. equals", "d. let"]
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
      }
    ]

// pseudocode
// define questions and variables
// when the start button is clicked, start timer and present question
// when question is answered, show if correct or wrong
// subtract value from clock, if wrong
// when time reaches zero, or questions are completed, game is over
// when game is over, save initials and score
