function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }

    return arr;
}

function partition(arr, low, high) {
    let i = low - 1;
    let pi = arr[high];

    for (let j = low; j < high; j++) {
        if (arr[j] < pi) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    arr[high] = arr[i + 1];
    arr[i + 1] = pi;

    return i + 1;
}

/**
 * Uncomment the following lines to test
 */
// console.log(quickSort([5, 8, 2, 0, 1]));
// console.log(quickSort([4, 3, 2, 10, 12, 1, 5, 6]));
