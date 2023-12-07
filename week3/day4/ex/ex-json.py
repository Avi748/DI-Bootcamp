import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# data = json.loads(sampleJson)
# print(data["company"]["employee"]["payable"]["salary"])
# y = {"birth_date":1995}
# data["company"]["employee"].update(y)

with open("json_file.json") as file:
    data = json.load(file)
info = json.dumps(data, indent=2)
print(info)