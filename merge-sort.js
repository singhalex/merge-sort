function merge(left, right) {
  // Merges two arrays in ascending numerical order
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Runs until the end of one array is reached
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      // Adds the lower number to the new array and increments the index counter
      mergedArray.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  // The left and right array are spread in order to catch any elements that were not compared
  return [...mergedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

function mergeSort(array) {
  // Base case
  if (array.length <= 1) {
    return array;
  }

  // Split the array into two
  const middle = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);

  // Merge the two arrays and further split them by recursion if needed
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

const testArray = [2, 5, 6, 1, 4, 9, 7, 3];
console.log(testArray);
console.log(mergeSort(testArray));

const testArray2 = [6, 777, 33, 1, 43, 6, 90];
console.log(testArray2);
console.log(mergeSort(testArray2));
