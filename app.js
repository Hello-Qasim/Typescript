var persons = {
    name: "Qasim",
    age: 23,
    cars: ["bmw", "ferari"],
    jeep: [3, "auto"],
};
console.log(persons.name);
for (var _i = 0, _a = persons.cars; _i < _a.length; _i++) {
    var car = _a[_i];
    console.log(car);
}
//Enums => In enums we acess the index/values of our contants
// Here in below code we have used the javascript global variable and value of writer is "0" but this can be done with enum too.
// const Writer = 0;
// In enums , the contants will be start with uppercase but that is not necessary and can be writter by lowercase or uppercase.So now the index/values of WRITER is 0,USER is 1 and PROGRAMMER is 2
var Role;
(function (Role) {
    Role[Role["WRITER"] = 0] = "WRITER";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["PROGRAMMER"] = 2] = "PROGRAMMER";
})(Role || (Role = {}));
var pers = {
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
var drives = [2, "car"];
// OR
// let drives: any[]
// drives= [2, "car"];
// So here the array of drives have number and string .But this should be avoid to use as we loss all the advantages of using typescript then in our PromiseRejectionEvent.
