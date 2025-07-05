let waitingTime = 3000
console.log(`Setting waiting time ${waitingTime / 1000} seconds`)

const timeFinished = () => {
    clearInterval(interVal)
    console.log("done")
}
setTimeout(timeFinished, waitingTime);


let timeDelay = 500
let currentTime = 0

const incTime = () => {
    currentTime += timeDelay
    console.log(` The time delay set is ${currentTime / 1000} seconds`)
}

const interVal = setInterval(incTime, timeDelay)