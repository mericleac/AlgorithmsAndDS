data = open('Day2Input.txt', 'r').read().split('\n')


def compareStrings(string_1, string_2):
    common_chars = ""
    uncommon = 0
    for idx, char in enumerate(string_1):
        if char == string_2[idx]:
            common_chars += char
        else:
            uncommon += 1
        if uncommon > 1:
            return (False, "")
    return (True, common_chars)


def find_matching(data):
    for idx, string_1 in enumerate(data):
        for string_2 in data[idx + 1:]:
            res = compareStrings(string_1, string_2)
            if res[0]:
                return res


print(find_matching(data))
