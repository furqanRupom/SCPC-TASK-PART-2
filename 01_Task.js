// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const reverseStr = (str) =>{
      let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const str = "Hello, World!";
const reversedString = reverseStr(str);
console.log(reversedString);
