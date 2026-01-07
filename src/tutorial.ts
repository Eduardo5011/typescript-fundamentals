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

// let greeting: string = "Hello, TypeScript!";
// greeting = greeting.toUpperCase();

// let age: number = 25;
// age = age + 5;

// let isAdult: boolean = age >= 18;
// isAdult = !isAdult;
// console.log(isAdult);

// ERRORS
// greeting = 10
// age = 'thirsty'
// isAdult = 'yes'

// UNION AND TYPE INFERENCE

//UNION
// let tax: number | string = 10;
// tax = 100;
// tax = "$10";

// let requestStatus: "pending" | "success" | "error" = "pending";
// requestStatus = "success";
// requestStatus = "error";
// requestStatus = 'randomString' // Error

// ANY
// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false;

// Ex.
// const books = ["1984", "Brave New World", "Fahrenheit 451"];

// let foundbook: string | undefined;

// for (let book of books) {
//   if (book === "1984") {
//     foundbook = book;
//     foundbook = foundbook.toUpperCase();
//     break;
//   }
// }

// console.log(foundbook?.length);

// Ex.

// let discount:number | string = 20
// discount = '20%'

// let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'
// orderStatus = 'shipped'
// orderStatus = 'delivered'

// ARRAYS AND OBJECTS

// let prices: number[] = [10, 20, 30];

// let fruit: string[] = ["apple", "banana", "cherry"];

// let names = ["peter", "susan", 1];

// let array: (string | boolean)[] = ["hello", true, "hi", false];

// let temperatures: number[] = [20, 25, 30];

// let colors: string[] = ["red", "green", "blue"];

// let mixdArray: (string | number)[] = ["text", 42, "more text", 100];

// OBJECTS

// let car: { brand: string; year: number } = {
//   brand: "toyota",
//   year: 2020,
// };

// let book = { title: "book", cost: 20 };
// let pen = { title: "pen", cost: 10 };
// let notebook = { title: "notebook" };

// let items: {readonly title: string; cost?: number }[] = [book, pen, notebook];
// // items[0].title = "new book"; readonly

// let bike: { brand: string; year: number } = { brand: "yamaha", year: 2021 };

// let laptop: { brand: string; year: number } = { brand: "Dell", year: 2020 };

// let product1 = { title: "shirt", price: 20 };
// let product2 = { title: "pants" };
// let products: { title: string; price?: number }[] = [product1, product2];

// products.push({ title: "hat", price: 15 });

// // FUNCTIONS PARAMS AND FUNCTION RETURNS

// function sayHi(name: string) {
//   console.log(`Hello there ${name.toUpperCase()}`);
// }

// sayHi("John");

// FUNCTION RETURNS

// function calculateDiscount(price: number): number {
//   const hasDiscount = true;

//   if (hasDiscount) {
//     return price;
//   }
//   return price * 0.9;
// }

// const finalPrice = calculateDiscount(200);

// const names: string[] = ["Alice", "Bob", "Charlie", "Jim"];

// function isNameInList(name: string): boolean {
//   return names.includes(name);
// }

// let nameToCheck = "Alice";

// if (isNameInList(nameToCheck)) {
//   console.log(`${nameToCheck} is in the list.`);
// } else {
//   console.log(`${nameToCheck} is not in the list.`);
// }

// OPTIONAL< DEFAULT AND REST PARAMETERS

// function calculatePrice(price: number, discount: number): number {
//   return price - (discount || 0);
// }

// let priceAfterDiscount = calculatePrice(100, 20);

// function calculateScore(
//   initialScore: number,
//   penaltyPoints: number = 0
// ): number {
//   return initialScore - penaltyPoints;
// }

// let scoreAfterPenalty = calculateScore(100, 15);
// let scoreWithoutPenalty = calculateScore(300);

// REST PARAMETERS

// function sum(message:string, ...numbers:number[]):string{
//     const doubled = numbers.map((num)=> num * 2)
//     console.log(doubled);

//     let total = numbers.reduce((previous, current)=> {
//         return previous + current
//     },0)
//     return `${message} ${total}`
// }

// let result = sum('The total is : ', 1,2,3,4,5)
// console.log(result);

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello Typescript");

// UNION TYPES AS FUNCTION PARAMETERS

function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toLowerCase());
  }
}

processInput(10);
processInput("Hello");

// OBJECTS ANS PARAMETERS AND EXCESS PROPERTY CHECKS

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

// ALTERNATIVE

function createStudent(student:{id:number; name:string}): void{
    console.log(`Welcome to the course ${student.name.toUpperCase()}`);
    
}

const newStudent = {
    id:5,
    name:'Alice',
}