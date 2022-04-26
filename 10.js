let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

let sa = arr.reduce((sum, current) => sum + current.age, 0) / arr.length;

console.log(sa);
