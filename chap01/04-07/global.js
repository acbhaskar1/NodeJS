// path library or module
let path = require("path")
// just console.log some text example
console.log("Hello World")
// Assign and console log
let hello = "Hey, You Bhaskar"
console.log(hello)
// console log the directory name
console.log(__dirname)
// console log filename with full path
console.log(__filename)
//extarct only file name
console.log(`The actual filname is ${path.basename(__filename)}`)
// slice
console.log(hello.slice(9))
