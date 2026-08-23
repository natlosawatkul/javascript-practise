//Object is an entity that can hld multiple values at the same time 
var customer = {
    firstName : 'John',
    lastName : 'Smith',
    cars : ["Volvo", "Toyota", "Tesla"]
}

// Dot notation
// console.log(customer.firstName)
customer.firstName = "Mike"

// Bracket notation
// console.log(customer['lastName'])
customer['lastName'] = "Silver"
console.log(`${customer.firstName} ${customer.lastName}`)


// Arrays is an another type of entity which is a list of items that want to save
// arrays has an index and start with zero
var car = ["Volvo", "Toyota", "Tesla"]
car[1] = "BMW"
console.log(car[1])
console.log(customer.cars[1])