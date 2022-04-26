function Calculator() {
  methods = this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.addMethod = function (sign, signFunc) {
    methods[sign] = signFunc;
    return;
  };

  this.calculate = function (operation) {
    let split = operation.split(" ");

    a = +split[0];
    op = split[1];
    b = +split[2];

    return this.methods[op](a, b);
  };
}

let calc = new Calculator();
calc.addMethod("*", (a, b) => a * b);
console.log(calc.calculate("5 * 7"));
