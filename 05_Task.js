// Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation

const calculator = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operator");
      break;
  }

  return result;
};

const num1 = 10;
const num2 = 5;
const operator = "+";
const result = calculator(num1, num2, operator);
console.log(result);
