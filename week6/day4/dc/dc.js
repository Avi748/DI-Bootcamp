let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (object) => {
    const fruits = object.fruits
    fruits.forEach((fruit) => console.log(fruit))
};

const cloneGroceries = () => {
    let user = client;
    user = "Betty";
    console.log(user, client);

    const shopping = groceries;
    shopping.totalPrice = "30$";
    shopping.other.paid = false;
}

displayGroceries(groceries)
cloneGroceries()