// Some of the core concepts of Typescript has be discussed here

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

//Enums =>
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

//Any

// By using any keyword we can add any type in our Array

let drives: any[] = [2, "car"];

// OR
// let drives: any[]
// drives= [2, "car"];

// So here the array of drives have number and string .But this should be avoid to use as we loss all the advantages of using typescript then in our project as it didn't check anything or any value.
