data = open('Day1Input.txt', 'r').read().split('\n')

sum = 0

for input in data:
    if input[0] == '+':
        sum += int(input[1:])
    else:
        sum -= int(input[1:])

print(sum)
