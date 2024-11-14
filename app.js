
// variables================================================================
const prompt = require('prompt-sync')();
const dotenv = require(`dotenv`)
const mongoose = require(`mongoose`)
const Customer = require(`./models/custModel`)
dotenv.config()

// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);



// start app=======================================================



startup = () => {
    console.log(`Hello, we are about to go through a CRUD application. This stands for :`);/// this whole thing was to help me remember and keep track of what I am doing. 
    console.log(`Create`);
    console.log(`Read`);
    console.log(`Update`);
    console.log(`Delete`);
}

userPrompt = () => {///// should be able to call back to this prompt for each subsequent thing
    console.log(`Welcome to the CRM`);
    console.log(`1. Create a new customer?`);
    console.log(`2. Veiw all customers?`);
    console.log(`3. Update an existing customer?`);
    console.log(`4. remove a customer from the universe?`);
    console.log(`5. quit without doing anything just to lie to your boss about doing the thing that you didnt do?`);
    let userChoice = prompt(`What would you like to do? `)
    return userChoice
}

// view whole database
findAllCustomers = async () => {
    const allCustomers = await Customer.find({})
    console.log(allCustomers);
    
}
createCustomer = async () => {
    const newCustomerName = prompt(`Name of the new Customer?  `)
    const newCustomerAge = parseInt(prompt(`Age of the new Customer?   `))
    const newCustomer = {
        newCustomerName,
        newCustomerAge
    }
    console.log(newCustomer);
    
    await Customer.create(newCustomer)
}

updateSpecificCustomer = async () => {
    const allCustomers = await Customer.find({})
    console.log(allCustomers);
    
    
}





    
run = () => {
    startup()
    userPrompt()
}    
run()
    
//  dead code ====================================================================================================  // 
    
    
    // console.log(`Hello, we are about to go through a CRUD application. This stands for :`);/// this whole thing was to help me remember and keep track of what I am doing. 
    // console.log(`Create`);
    // console.log(`Read`);
    // console.log(`Update`);
    // console.log(`Delete`);
    
    
    
    // console.log(`Welcome to the CRM`);
    // console.log(`1. Create a new customer?`);
    // console.log(`2. Veiw all customers?`);
    // console.log(`3. Update an existing customer?`);
    // console.log(`4. remove a customer from the universe?`);
    // console.log(`5. quit without doing anything just to lie to your boss about doing the thing that you didnt do?`);
    // const userChoice = prompt(`What would you like to do?`)