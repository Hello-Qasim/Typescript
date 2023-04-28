// Some of the core concepts of Typescript has be discussed here

// <=============Tuples=========>
const persons: {
  name: string;
  age: number;
  cars: string[];
  jeep: [number, string]; //This is tuples which is an array of two values and one of them is  number and other is string.
} = {
  name: "Qasim",
  age: 23,
  cars: ["bmw", "ferari"],
  jeep: [3, "auto"],
};

console.log(persons.name);

for (const car of persons.cars) {
  console.log(car);
}

// <=============Enums=========>

// In enums we can check the values of constants
// Here in below code we have used the javascript global variable and value of writer is "0" but this can be done with enum too.

// const Writer = 0;

// In enums , the contants will be start with uppercase but that is not necessary and can be writter by lowercase or uppercase.So now the index/values of WRITER is 0,USER is 1 and PROGRAMMER is 2

enum Role {
  WRITER,
  USER,
  PROGRAMMER,
}

const pers = {
  name: "Qasim",
  age: 23,
  cars: ["bmw", "ferari"],
  jeep: [3, "auto"],
  role: Role.WRITER,
};

if (pers.role === Role.WRITER) {
  console.log("amzwe");
}

// <=============Any=========>

// By using any keyword we can add any type in our Array

let drives: any[] = [2, "car"];

// OR
// let drives: any[]
// drives= [2, "car"];

// So here the array of drives have number and string .But this should be avoid to use as we loss all the advantages of using typescript then in our project as it didn't check anything or any value.

// <=============Union=========>

// To tell typescript that we are fine with numbers or string or any other datatype we can use Union.

// Here we have assign the type of parameters as "number".This is why we only get the result of "Ages" down below if parameters are passed as number typescriot will yelled on us below in the "names" variable when we passed string as an argument coz it wasn't been assigned.

// function unionType(n1: number, n2: number) {
//   const result = n1 + n2;
//   return result;
// }

// const ages = unionType(20, 12);
// console.log(ages);

// // const names=unionType("Qas","Javed")
// console.log(names); => This will throw an error as type is assigned number

// To solve this problem we can use union and for that syntex is down below:

function unionType(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString(); //Here strings are adding
  }

  return result;
}

const ages = unionType(20, 12);
console.log(ages);

const names = unionType("Qas", "Javed");
console.log(names);

// So with the help of "union" we been able to call function by passing the arguements of strings and numbers .

// <=====Literal Types=============>

// In TypeScript, literal types are a type of type that allows you to specify exact values that a variable can hold. This can be useful for creating more specific and expressive types in your code.

// Here are a few examples of literal types in TypeScript:

type Direction = "left" | "right" | "up" | "down";
let direction: Direction = "left"; // valid
// let invalidDirection: Direction = "north"; // Type '"north"' is not assignable to type 'Direction'.

// Numeric Literal Types:

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
let roll: DiceRoll = 3; // valid
// let invalidRoll: DiceRoll = 7; // Type '7' is not assignable to type 'DiceRoll'.

// <==================Type Allias======================>

// In Typescript, type allias is a way to give name to the types or unions and to reuse that type name throughout your code.For example in the above code:

type Age = number | string; //Here we can add any types after equal sign;

// function addNumbers(number1: number | string, number2: number | string) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     return number1 + number2;
//   } else {
//     return "Both parameters should be numbers";
//   }
// }

// const adding = addNumbers(20, 10);
// console.log(adding);

//In the below code, same above code has been used but by passing the type "Allias" as a parameter and we still get the same result.This can save us from alot of code writing.This allows you to avoid unnecessary repetition and manage types centrally.

function addNumbers(number1: Age, number2: Age) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 + number2;
  } else {
    return "Both parameters should be numbers";
  }
}

const adding = addNumbers(20, 10);
console.log(adding);

// <==================Function Return type & Void======================>

// In typescript, function has a return type For exampl:

function addValues(n1: number, n2: number) {
  return n1 + n2;
}

// In the above code whenever the cursor comes on function then typescript shows this line of code "function addValues(n1: number, n2: number): number" .Here after the colon sign there is "number" type which comes when we try to return (n1+n2) in our function above.If i change the return into strings then the return type of fucntion will also be change.So this basically called Return Type of function.

// A function returns a type "Void" when it doesn't return anything.For example:

function printAge(n3: number) {
  console.log("Result:" + n3);
}

printAge(addValues(2, 3)); //Output => Result:5
console.log(printAge(addValues(2, 3)));
// So here in the above function of printAge,we are not returning anything this is why typescript return type of this fucntion will be "function printAge(n3: number): void".Whenever fucntion doesn't return anything it's return type will be "Void".

// We can explicitely defined return type to function but why do we need to do if typescript is doing it's work

// <==================Function as a Type======================>

// Lets take a variable with the name of "joinValues" and then store a function "addValues" from above in this variable.but when we see that type of variable "joinValues" it will be "any" (let joinValues: any).So it means anything can be stored in this variable.

// let joinValues;

// joinValues = addValues;
// joinValues = 10;
//  //error
// console.log(joinValues(8, 8));
// //16

// As in the above code we are storing function in variable and then calling that variable by passing the calues and it is returning "16" which is possible result but when we stored a  number in joinValues it doesn't show error in the terminal but showed in runtime as we try to call "joinValues" as a function.So for this problem a function type can be use which will shows us the error at the time of compiling that this values cannot be store in this variable.

let joinValues: (a: number, b: number) => number;

joinValues = addValues;
// joinValues = printAge; => This will show an error if we'll uncomment this.
//undefinded
console.log(joinValues(8, 8));
//16

// In the above code we passing a type function to our variable "joinValues" and as soon we did typescript remove the error from joinValues with addValues and showed an error with the values having printAge.This is because we took a variable with function type which has numbers parameters and returning a number too and that is our addValues function but not printAge.

// <==================unknown type======================>

// unknown type is little restricted as compared to "any" type.As in any type you can assign any value to the variable but this not the case in "unknown" type.

let title: unknown;

title = 2;
title = "Mr";

// So here it can be seen that value of "title" variabe is number and string.but when i will try to keep this variable equal to another variable with value of "string" then typescript shows an error.

// let name: string;
// name=title => error

// Here the above code shows an error when title value is assigned to name variable.Although it should be equal to each other.So unknown first check the type of value which is stored in title and then it assigned to "name" variable.

if (typeof title === "string") {
  //   name = title;
}

// So here we need an extra check to assigned a value with type of unknown(title) to a value with fixed type (name).So unknown is better choice if you don't know what type you exactly going to store,it might be number or string.

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 300);

// {message: 'An error occured', errorCode: 300} => Output

// Here this is a function which throws an object,you can throw whatever you want to the javascript fucnction and here we are throwing an object with two properties of "message and "error"
