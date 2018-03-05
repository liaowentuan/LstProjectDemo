list_1 = set([1, 3, 4, 8, 9, 10])
list_2 = set([4, 6, 7, 8, 10, 11])
list_3 = set([4])
list_4 = set([1])
print(list_1, list_2)
print('交集', list_1.intersection(list_2), list_1 & list_2)
print('并集', list_1.union(list_2), list_1 | list_2)
print('差集', list_1.difference(list_2), list_1 - list_2)
print('子集', list_1.issubset(list_2))
print('父集', list_1.issuperset(list_2))
print('子集', list_3.issubset(list_2))
print('父集', list_2.issuperset(list_3))
print('对称差集', list_1.symmetric_difference(list_2), list_1 ^ list_2)
print('是否没有交集',list_3.isdisjoint(list_4))
list_4.add(22)
print(list_4)
list_3.update([1,2,3,4,5])
print(list_3)
list_3.remove(4)
print(list_3.discard(4)) # 优秀
print(list_3)
print('length',len(list_3))
print('5在集合3中吗？',5 in list_3)
print('5不在集合3中吗？',5 not in list_3)
print('2', '2' in '12345678')
