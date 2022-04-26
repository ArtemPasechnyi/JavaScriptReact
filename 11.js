function unique(arr) {
  let result = [];

  for (let string of arr) {
    if (!result.includes(string)) {
      result.push(string);
    }
  }

  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings));
