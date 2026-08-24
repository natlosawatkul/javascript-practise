// Declarative function
// start with keyword function and provide with name of function

helloOne()
function helloOne(){
    console.log('Hello One !')
}


// Anonymous function
// doesn't have a name of function and need to asign the result of the function to call the function
var helloTwo = function(){
    console.log('Hello Two!')
}

helloTwo()

// ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello Three !')
}

helloThree()

// Function with arguments
function printName(name){
    console.log(`Hello ${name}`)
}

printName('Belle')

// Function with return
function multipleByTwo(number){
    var result = number * 2
    return result
}

var myResult = multipleByTwo(10)
console.log(myResult)

// Import function
import { printAge } from "../helpers/printHelper.js"
printAge(5)

// Import everything
import * as helper from "../helpers/printHelper.js"
helper.printAge(10)