def bubbleSort(arr):
    swaps = 0

    for i in range(len(arr) - 1, 0, -1):

        for j in range(0, i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swaps = swaps + 1

        if swaps == 0:
            break

    return arr


# Uncomment the following lines to test
# print(bubbleSort([5, 8, 2, 0, 1]))
# print(bubbleSort([4, 3, 2, 10, 12, 1, 5, 6]))
