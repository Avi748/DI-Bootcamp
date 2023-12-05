class Pagination():
    def __init__(self, items, pageSize) -> None:
        self.items = items
        self.pageSize = pageSize

    def getVisibleItems(self):
        page = []
        for i in range(0, self.pageSize):
            page.append(self.items[i])
        return page
    

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

print(p.getVisibleItems())
# ["a", "b", "c", "d"]
