let camelize = "background-color";

let array = camelize.split("-");

let formed = array.map((word, index) => {
  index == 0 ? word : word[0].toUpperCase() + word.slice(1);
  console.log(word);
});
let joined = formed.join("");

console.log(joined);

console.log(
  camelize
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("")
);
