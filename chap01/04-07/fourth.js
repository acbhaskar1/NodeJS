

let questions = [
    "What is your Name",
    "What are you doing",
    "Which programming language you are learning"
];

answers = [];
function Ask(i = 0){
    process.stdout.write(questions[i])
    process.stdout.write(" : ")
}
Ask()
process.stdin.on('data',(data) => {    
    answers.push(data.toString().trim());
    if(answers.length < questions.length ){              
        Ask(answers.length)
    }else{
        process.exit()
    }   
    
});
    
