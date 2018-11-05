function bubbleSort(arr) {
  // Set the initial number of swaps to 0
  let swaps = 0;
  // Have the end index decrease each time, the last element sorted will always be correct
  for (let i = arr.length; i > 0; i--) {
    // Iterate until the end index, i
    for (let j = 0; j < i; j++) {
      // If the element is greater thn the next element, swap the two
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    if (swaps == 0) {
      break;
    }
  }

  return arr;
}

/**
 * Uncomment the following lines to test
 */
// console.log(bubbleSort([5, 8, 2, 0, 1]));
// console.log(bubbleSort([4, 3, 2, 10, 12, 1, 5, 6]));
