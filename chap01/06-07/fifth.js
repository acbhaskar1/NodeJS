const readline = require("readline")
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("How have been doing now? ", (answer) =>
    console.log(`You have answered ${answer}`)
)