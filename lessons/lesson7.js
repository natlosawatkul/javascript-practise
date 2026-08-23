//Loops - when you need to repeat a certain operation multiple times
// statement 1 : what we want to start the loop with
// statement 2 : how long do we want to run our loop and when we want to stop
// statement 3 : what do we need to do after each cycle of the loop

// for(statement1; statement2; statement3){

// }

for(let i=0; i<5; i++){
    console.log("Hello World")
}

var cars = ["Volvo", "Toyota", "Tesla"]
// for of loop
for(let car of cars){
    console.log(car)
    if(car == "Toyota"){
        break
    }
}

//ES6 syntax for each loop
cars.forEach( car=> {
    console.log(car)
})