data = open('Day2Input.txt', 'r').read().split('\n')


def countTwoOrThree(string):
    char_dict = {}
    two, three = 0, 0

    for char in string:
        char_dict[char] = 1 + char_dict.get(char, 0)

    for char, num in char_dict.items():
        if num == 2:
            two = 1
        elif num == 3:
            three = 1

    return (two, three)


twoCount = 0
threeCount = 0

for string in data:
    tup = countTwoOrThree(string)
    twoCount += tup[0]
    threeCount += tup[1]

print(twoCount * threeCount)
