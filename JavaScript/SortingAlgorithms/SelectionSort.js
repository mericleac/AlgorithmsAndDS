function selectionSort (arr) {
    // Iterate through the entire array
    for (let i = 0; i < arr.length; i++) {
        // Save the current element as the temporary minimum and its index
        let min = arr[i];
        let minIdx = i;
        // Iterate through the right sub-array to find the minimum
        for (let j = i + 1; j < arr.length; j++) {
            // If the current element is less than the temporary minimum, overwrite it
            if (arr[j] < min) {
                min = arr[j];
                minIdx = j;
            }
        }
        // Swap the minimum of the right sub-array with the current element
        // The left sub-array will be sorted, then repeat with i to the end of the array
        let temp = arr[i];
        arr[i] = min;
        arr[minIdx] = temp;
    }

    return arr;
}

/**
* Uncomment the following lines to test
*/
// console.log(selectionSort([5, 8, 2, 0, 1]));
// console.log(selectionSort([4, 3, 2, 10, 12, 1, 5, 6]));