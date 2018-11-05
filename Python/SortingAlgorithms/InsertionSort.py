def insertionSort(arr):

    for i in range(1, len(arr)):
        temp = arr[i]
        idx = i

        while arr[idx - 1] > temp and idx > 0:
            arr[idx] = arr[idx - 1]
            idx = idx - 1

        arr[idx] = temp

    return arr


# Uncomment the following lines to test
# print(insertionSort([5, 8, 2, 0, 1]))
# print(insertionSort([4, 3, 2, 10, 12, 1, 5, 6]))
