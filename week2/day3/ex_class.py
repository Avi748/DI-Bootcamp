# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }

# print(sample_dict["class"]["student"]["marks"]["history"])


sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]

for i in keys_to_remove:
    del sample_dict[i]

print(sample_dict)

# #2
# wallet = "$300"
# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }
# new_list_keys = list(items_purchase.keys())
# new_list_value = list(items_purchase.values())
# print(len(wallet))
# print(len(new_list_value[0]))

# for i in new_list_value:
#     i = new_list_value[i]
# print(i)