function calculo(num1, num2) {
  if (num1 < num2) {
    return console.log(num1 + " es mas pequeño que " + num2);
  } else {
    return console.log(num2 + " es más pequeño que " + num1);
  }
}

module.exports = calculo;
