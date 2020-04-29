let names_list_1 = [
    { id: 1, name: "jiwan", age: 29, due: 4000, discount: 0},
    { id: 2, name: "Hair", age: 26, due: 5000, discount: 0},
    { id: 3, name: "Kiran", age: 26, due: 6000, discount: 0},
    { id: 4, name: "Suman", age: 20, due: 7000, discount: 0},
    { id: 5, name: "sabina", age: 27, due: 8000, discount: 0}
];

let discounted_list = [];

discounted_list = names_list_1.map((item) => {
    if(item.age >= 26) 
        item.discount = 15;
    else 
        item.discount = 20;
    return item;
})

console.log(discounted_list);