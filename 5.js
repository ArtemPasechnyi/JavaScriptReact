let arr = ["HTML", "JavaScript", "CSS"];

let res = arr.slice(() => item.length);
res.sort((a, b) => a.length - b.length);
console.log(arr);
console.log(res);
