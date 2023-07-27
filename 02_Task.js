// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfNumbers = (arr)=>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
}

const arr = [5, -5, -3, -5, -7, -8, 1, 9];

const sumOfNumber = sumOfNumbers(arr);
console.log(sumOfNumber);