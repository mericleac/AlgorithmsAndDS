def selectionsort(arr):
    for i in range(0, len(arr)):
        min = arr[i]
        minIdx = i

        for j in range(i + 1, len(arr)):
            if arr[j] < min:
                min = arr[j]
                minIdx = j

        arr[i], arr[minIdx] = arr[minIdx], arr[i]

    return arr


# Uncomment the following lines to test
# print(selectionsort([5, 8, 2, 0, 1]))
# print(selectionsort([4, 3, 2, 10, 12, 1, 5, 6]))
