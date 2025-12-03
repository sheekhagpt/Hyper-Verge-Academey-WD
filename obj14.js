// We want to create a class that represents a quiz question with its options, the correct answer, and methods to interact with it.

// Each quiz question will be created as an object of this class by passing the required data into the constructor.

// The class will have methods to:

// Check if an answer is correct.

// Show the correct answer.

// Display the question and options.



// Your Task:

// Define a class QuizQuestion with:

// A constructor that takes:

// question - a string storing the question text.

// options - an array of four strings for the answer choices.

// correctIndex - a number storing the index of the correct choice (0-based index).

// A method check(answerIndex) that:

// Takes the index of the answer as an argument.

// Returns true if it matches correctIndex, otherwise returns false.

// A method explain() that logs:

// Correct answer is: <correct option text>
// A method show() that logs the question and options in this format:

// Question: <question text>
// 0: <option0>
// 1: <option1>
// 2: <option2>
// 3: <option3>
// Create at least two quiz question objects using the QuizQuestion class, each with its own question, options, and correct answer index.

// Demonstrate:

// Calling .check(...) with both a correct and incorrect answer to show true and false results.

// Calling .explain() and .show() on at least one quiz question object.

class QuizQuestion {
  constructor(question, options, correctIndex) {
    this.question = question;
    this.options = options;
    this.correctIndex = correctIndex;
  }

  check(answerIndex) {
    return answerIndex === this.correctIndex;
  }

  explain() {
    console.log("Correct answer is: " + this.options[this.correctIndex]);
  }

  show() {
    console.log("Question: " + this.question);
    this.options.forEach((opt, index) => {
      console.log(index + ": " + opt);
    });
  }
}

let q1 = new QuizQuestion(
  "Capital of India kya hai?",
  ["Mumbai", "Delhi", "Kolkata", "Chennai"],
  1
);

let q2 = new QuizQuestion(
  "Which planet is known as Red Planet?",
  ["Earth", "Venus", "Mars", "Jupiter"],
  2
);

q1.show();
console.log(q1.check(1));
console.log(q1.check(0));
q1.explain();

q2.show();
console.log(q2.check(2));
q2.explain();