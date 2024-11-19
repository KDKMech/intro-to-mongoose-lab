// variables================================================================
const prompt = require("prompt-sync")();
const dotenv = require(`dotenv`);
dotenv.config();
const mongoose = require(`mongoose`);
const Customer = require(`./models/custModel`);
const validChoice = [1, 2, 3, 4, 5];

// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);

// start app=======================================================

startup = () => {
  console.log(
    `Hello, we are about to go through a CRUD application. This stands for :`
  ); /// this whole thing was to help me remember and keep track of what I am doing.
  console.log(`Create`);
  console.log(`Read`);
  console.log(`Update`);
  console.log(`Delete`);
};

userPrompt = () => {
  ///// should be able to call back to this prompt for each subsequent thing
  console.log(`Welcome to the CRM`);
  console.log(`1. Create a new customer?`);
  console.log(`2. Veiw all customers?`);
  console.log(`3. Update an existing customer?`);
  console.log(`4. remove a customer from the universe?`);
  console.log(
    `5. quit without doing anything just to lie to your boss about doing the thing that you didnt do?`
  );
  let userChoice = prompt(`What would you like to do? `);
  return userChoice;
};

// view whole database
findAllCustomers = async () => {
  const allCustomers = await Customer.find({});
  console.log(allCustomers);
  //   userChoiceFunction(userPrompt());
};
createCustomer = async () => {
  const newCustomerName = prompt(`Name of the new Customer?  `);
  const newCustomerAge = parseInt(prompt(`Age of the new Customer?   `));
  const newCustomer = {
    name: newCustomerName,
    age: newCustomerAge,
  };
  console.log(newCustomer);

  await Customer.create(newCustomer);
  console.log(`New Customer Created`);
  //   userChoiceFunction(userPrompt());
  // userPrompt()
};


deleteSpecificCustomer = async () => {
  console.log(`test2`);

  const allCustomers = await Customer.find({});
  console.log(allCustomers);
  let choice = prompt( `please copy and paste the ID of the customer you would like to Delete   `);
  // let updatedName = prompt(`what is the updated Name: `)
  // let updatedAge = prompt(`What is the updated Age:`)
  const deleteCustomer = await Customer.findByIdAndDelete(
    `${choice}`)

  console.log(`Deleted : ${deleteCustomer}`);
}

updateSpecificCustomer = async () => {
  //// display a list of customers to update then update them

  console.log(`test1`);

  const allCustomers = await Customer.find({});
  console.log(allCustomers);
  let choice = prompt( `please copy and paste the ID of the customer you would like to update`);
  let updatedName = prompt(`what is the updated Name: `)
  let updatedAge = prompt(`What is the updated Age:`)
  const updateCustomer = await Customer.findByIdAndUpdate(
    `${choice}`,
    {name: `${updatedName}`, age: `${updatedAge}`},
    {new: true}
  )
  console.log(`Updated too : ${updateCustomer}`);
   

  //once they see all customers, they should get the chance to pick one and update it.

  // they can copy and paste the id number of the customer they want to update.

  // userPrompt()
};

quit = async () => {
  // this function should quit the application
  await mongoose.connection.close()
  console.log(`Closed`);
  // process.exit();
};

run = () => {
  startup();
  userChoiceFunction(parseInt(userPrompt()));
};
const userChoiceFunction = async(userChoice) => {
  switch (userChoice) {
    case 1:
      console.log(`you chose to create a new customer`);
      await createCustomer();
      userChoiceFunction(parseInt(userPrompt()));
      break;
    case 2:
      console.log(`you chose to see all customers`);
      await findAllCustomers();
      userChoiceFunction(parseInt(userPrompt()));
      break;
    case 3:
      console.log(`you chose to update a customer`);
      await updateSpecificCustomer();
      userChoiceFunction(parseInt(userPrompt()));
      break;
    case 4:
      console.log(`you chose to delete a customer`);
      await deleteSpecificCustomer();
      userChoiceFunction(parseInt(userPrompt()));
      break;
    case 5:
      quit();
      break;
    default:
      console.log(`please select a valid choice`);
      userChoiceFunction(parseInt(userPrompt()));
  }
};

// console.log(`1. Create a new customer?`);
//     console.log(`2. Veiw all customers?`);
//     console.log(`3. Update an existing customer?`);
//     console.log(`4. remove a customer from the universe?`);
//     console.log(`5. quit without doing anything just to lie to your boss about doing the thing that you didnt do?`);

const connect = async () => {
  console.log(`Please standby for connection`);

  await mongoose.connect(process.env.MONGODB_URI);
  console.log(`Connected to MongoDB`);

  // const userChoice = userPrompt()
  run();
  // userChoiceFunction(userPrompt())
};

connect();
//  dead code ====================================================================================================  //

// console.log(`Hello, we are about to go through a CRUD application. This stands for :`);/// this whole thing was to help me remember and keep track of what I am doing.
// console.log(`Create`);
// console.log(`Read`);
// console.log(`Update`);
// console.log(`Delete`);

// console.log(`Welcome to the CRM`);
// run()
// console.log(`1. Create a new customer?`);
// console.log(`2. Veiw all customers?`);
// updateSpecificCustomer()
// createCustomer()
// console.log(`3. Update an existing customer?`);
// console.log(`4. remove a customer from the universe?`);
// console.log(`5. quit without doing anything just to lie to your boss about doing the thing that you didnt do?`);
// const userChoice = prompt(`What would you like to do?`)
// userPrompt()
// if (userChoice == 1) {
//     console.log(`you chose to create a new customer`);

//     createCustomer()
// }
// userPrompt()
// if (userChoice == 2) {
//     console.log(`you choose to see all customers`);

//     findAllCustomers()
// }
// if (userChoice == 3) {
//     console.log(`you chose to update a customer`);

//     updateSpecificCustomer()
// }
// if (userChoice == 4) {
//     console.log(`you chose to delete a customer`);

//     deleteCustomer()
//     userPrompt()
// }
// if (userChoice == 5) {
//     quit()
// }
// else if (userChoice != validChoice){
//     console.log(`please select a valid choice`);

// }
