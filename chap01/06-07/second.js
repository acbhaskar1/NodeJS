let waitingTime = 3000
console.log(`Setting waiting time ${waitingTime / 1000} seconds`)

const timeFinished = () => console.log("done")
setTimeout(timeFinished, waitingTime);

let currentTime = 0
let timeDelay = 500

const incTime = () => {
    currentTime += timeDelay
    console.log(` The time delay set is ${waitingTime / currentTime} seconds`)
}

setInterval(incTime, waitingTime)