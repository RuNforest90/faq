a = [2,5,6,8,1,4,-6,-2,-4,-1,-6,-4,-9,-7,0,0,0,0,0]
min = []
plus = []
o = []
for i in a:
    if (i < 0):
        min.append(i)
    if (i > 0):
        plus.append(i)
    if (i == 0):
        o.append(i)

m = len(min)
p = len(plus)
null = len(o)

print("отрицательное :",m)
print(min)
print("положительное :",p)
print(plus)
print("нули",null)
print(o)
