const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let questions = [
    "What is your Name? ",
    "How have you been doing? ",
    "Usually interesting things you choose to do? "
];
let answers = [];

const collectQuestions = (questions) => {

    const questionsAnswered = (answer) => {
        answers.push(answer.trim());
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionsAnswered)
        }
        else {
            console.log("\n\n --------------------------\n")
            console.log("***   Thanks for Your Answers   ***\n")
            process.exit();
        }

    }
    rl.question(questions[0], questionsAnswered)
}

collectQuestions(questions)