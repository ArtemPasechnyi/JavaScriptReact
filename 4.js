let arr = [5, 2, 1, -10, 8];

arr.sort();
arr.reverse();

console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);
