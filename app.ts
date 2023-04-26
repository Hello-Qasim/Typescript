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
