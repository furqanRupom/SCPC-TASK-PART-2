//Task 3: Write a JavaScript program to find the most frequent element in an array and return it.


const findMostFrequent = (arr) =>{
    const hashmap = {};
    let maxCount = 0;
    let mostFrequent;

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      hashmap[element] = (hashmap[element] || 0) + 1;
      if (hashmap[element] > maxCount) {
        maxCount = hashmap[element];
        mostFrequent = element;
      }
    }

    return mostFrequent;
}

const arr = [2, 12, 1, 2, 8, 2, 2, 1, 8, 2];
const mostFrequentElement = findMostFrequent(arr);
console.log(mostFrequentElement);