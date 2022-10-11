a=[1, 5, 4, 6, 8, 7, 6]
i=len(a)
w=int(i/2)
g=0
e=0
h=0
if i%2==0:
  g=int(w-1)
  while h<1:
    print(a[w], a[g])
    h+=1
else:
  while h<1:
    print(a[w])
    h+=1