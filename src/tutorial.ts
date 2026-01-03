// let awesomeName: String = "shakeAndBake"
// awesomeName = 'something'
// awesomeName=awesomeName.toUpperCase()
// console.log(awesomeName)

// //

// let amount: number = 20
// amount = 12 -1

// // amount = 'pants'

// let isAwesome: boolean = true
// isAwesome = false
// // isAwesome = 'shakeAndBake'

let greeting: string = "Hello, TypeScript!";
greeting = greeting.toUpperCase();

let age: number = 25;
age = age + 5;

let isAdult: boolean = age >= 18;
isAdult = !isAdult;
console.log(isAdult);

// ERRORS
// greeting = 10
// age = 'thirsty'
// isAdult = 'yes'

// UNION AND TYPE INFERENCE

//UNION
let tax: number | string = 10;
tax = 100;
tax = "$10";

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";
// requestStatus = 'randomString' // Error

// ANY
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// Ex.
const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundbook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundbook = book;
    foundbook = foundbook.toUpperCase();
    break;
  }
}

console.log(foundbook?.length);


// Ex.

let discount:number | string = 20
discount = '20%'


let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'
orderStatus = 'shipped'
orderStatus = 'delivered'