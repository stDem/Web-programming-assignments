def entferne_doppelteStudenten(studenten):
    result = []
    for student in studenten:
        if student not in result:
            result.append(student)
    return result

print(entferne_doppelteStudenten([1234, 1235, 1236, 1234, 1235])) 
print(entferne_doppelteStudenten([1111, 1111, 1111, 1111])) 
