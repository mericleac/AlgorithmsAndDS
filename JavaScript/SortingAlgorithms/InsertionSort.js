function insertionSort (arr) {

    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let idx = i - 1;
        while (arr[idx] > temp && idx >= 0) {
            arr[idx + 1] = arr[idx];
            idx--;
        }
        arr[idx + 1] = temp;
        console.log(arr);
    }

    return arr;
}

/**
* Uncomment the following lines to test
*/
// console.log(insertionSort([5, 8, 2, 0, 1]));
// console.log(insertionSort([4, 3, 2, 10, 12, 1, 5, 6]));