let names_list_1 = [
    { id: 1, name: "jiwan", age: 29},
    { id: 2, name: "Hair", age: 26},
    { id: 3, name: "Kiran", age: 26},
    { id: 4, name: "Suman", age: 20},
    { id: 5, name: "sabina", age: 27}
];

let iterable_values = names_list_1.entries();

while(iterable_values.next() != "undefined") {
    console.log(iterable_values.next().value);
}