//import process from "process";
//console.log(process.argv)

function grab(flag){    
    let indexAfterFlag = process.argv.indexOf(flag)+1
    console.log(process.argv[indexAfterFlag])
}
grab("--user")
grab('--greeting')