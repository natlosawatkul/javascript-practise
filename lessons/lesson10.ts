// typescript preventing to assign the value of the different type to the variable which is declared
// javascript does not prevent from changing the types of the data assigned to the variable 
// The different between TypeScrip and JavaScript is adding support of the strict typing


var customerFirstName: string = "John"
var customerLastName: string = "Smith"
var customerAge: number = 25

type Customer = {firstName:string, lastName:string, active: boolean}

var firstCustomer: Customer = {
    firstName: "Mary",
    lastName: "Johns",
    active: true
}