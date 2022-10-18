const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

function calc(operation, num1, num2) {
    switch (operation) {
        case `add`:
            return num1 + num2
        case `sub`:
            return num1 - num2
        case `mult`:
            return num1 * num2
        case `div`:
            return num1 / num2        
        default:
            return `invalid operation`
    }
}

console.log(calc(operation, num1, num2));