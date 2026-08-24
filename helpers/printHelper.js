export function printAge(age){
    console.log(age)
}

class CustomerDetails {
    printFirstName(firstName){
        console.log(firstName)
    }

    printLasttName(lastName){
        console.log(lastName)
    }
}

export const customerDetails = new CustomerDetails()