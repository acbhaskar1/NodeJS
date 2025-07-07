const {inc, dec, getCount} = require("./myModules")

inc()
inc()
inc()

console.log(`The count after three increment ${getCount()}`)
dec()
console.log(`The count after three increment & one decrement ${getCount()}`)