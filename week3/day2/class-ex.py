# class Door():
#     def __init__(self, is_opend) -> None:
#         self.is_open = is_opend

#     def open_door(self):
#         if self.is_open is True:
#             return self.is_open

#     def close_door(self):
#         if self.is_open is False:
#             return self.is_open


# class BlockedDoor(Door):
#     def __init__(self, is_opend) -> None:
#         super().__init__(is_opend)
#         raise Exception("Blocked door can't open")
    
# a = Door(False)
# print(a.open_door())
# print(a.close_door())

# d = BlockedDoor(True)
# d.open_door()


class Pagination():
    def __init__(self, items, pageSize) -> None:
        self.items = items
        self.pageSize = int(pageSize)
        self.current_page = 1
        self.total_pages = len(self.items) // self.pageSize + 1

    def getVisibleItems(self):
        end_index = self.pageSize * self.current_page
        start_index = end_index - self.pageSize

        currentpg = self.items[start_index : end_index]
        print(currentpg)


    def nextPage(self):
        if self.current_page == self.total_pages:
            self.current_page = 1
        else:    
            self.current_page += 1
        return self.current_page

    def prevPage(self):
        self.current_page -= 1
        return self.current_page

    def firstPage(self):
        self.current_page = 1
        return self.current_page

    def lastPage(self):
        self.current_page = self.total_pages
        return self.current_page

    def goToPage(self, pageNum):
        self.current_page = pageNum
        return self.current_page

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)
p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.nextPage()
p.getVisibleItems()
p.prevPage()
p.getVisibleItems()
p.lastPage()
p.getVisibleItems()
p.goToPage(4)
p.getVisibleItems()
