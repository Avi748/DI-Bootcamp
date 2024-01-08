const shop = require('./products.js')

const search = (value) => {
    shop.objectArr.forEach((item) => {
        if(value === item.name){
            console.log(item)
        }
    })
}

search("SamsungTV");