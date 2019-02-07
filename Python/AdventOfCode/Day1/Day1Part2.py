data = open('Day1Input.txt', 'r').read().split('\n')

values = set()
idx = 0
sum = 0

while True:
    if sum in values:
        print(sum)
        break
    else:
        values.add(sum)

    if data[idx][0] == '+':
        sum += int(data[idx][1:])
    else:
        sum -= int(data[idx][1:])
    idx = (idx + 1) % len(data)
