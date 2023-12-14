import requests
import os , json

#200 = Success
#300 = Redirect
#400 = Error
#404 = not founded

dir_path = os.path.dirname(os.path.realpath(__file__))

data = []

import json

# for i in range(1, 10):
#     response = requests.get("https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population")
#     if response.status_code == 200:
#         data.append(response.json())

# with open(dir_path + "\\country.json", mode= 'a') as file:
#     json.dump(data, file)

# print(data[:4])

json_file = 'country.json'
with open(json_file, 'r') as file_obj:
    read = json.load(file_obj)
    info = json.dumps(read, indent=2)

print(info)