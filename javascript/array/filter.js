let names_list_1 = [
    { id: 1, name: "jiwan", age: 29, due: 4000},
    { id: 2, name: "Hair", age: 26, due: 5000},
    { id: 3, name: "Kiran", age: 26, due: 6000},
    { id: 4, name: "Suman", age: 20, due: 7000},
    { id: 5, name: "sabina", age: 27, due: 8000}
];

let filtered_list = names_list_1.filter((item) => item.age < 26);
console.log(filtered_list);