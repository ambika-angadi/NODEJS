const bubbleSort = require('./Ü83Ag3.aBubblesort-export.js');

function MarD(array1, array2) {
  const mergedArray = [...array1, ...array2];
  bubbleSort(mergedArray);

  const uniqueArray = [];
  for (let i = 0; i < mergedArray.length; i++) {
    if (mergedArray[i] !== mergedArray[i + 1]) {
      uniqueArray.push(mergedArray[i]);
    }
  }

  return uniqueArray;
}

const array1 = [100, 93, 48, 12, 61];
const array2 = [74, 12, 48, 66, 300];
const mergedAndUnique = MarD(array1, array2);
console.log(mergedAndUnique); 


