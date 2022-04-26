let arr = [5, 3, 8, 1];

function filtred(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
console.log(filtred(arr, 1, 4));
