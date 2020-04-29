let names_list_1 = [
    { id: 1, name: "jiwan", age: 29, due: 4000},
    { id: 2, name: "Hair", age: 26, due: 5000},
    { id: 3, name: "Kiran", age: 26, due: 6000},
    { id: 4, name: "Suman", age: 20, due: 7000},
    { id: 5, name: "sabina", age: 27, due: 8000}
];

let total_due = 0;

// total_due = names_list_1.reduce((sum, currentItem) => {    
//     if(currentItem.age < 26)
//         return Number(sum) + Number(currentItem.due);
//     else return sum + 0;
// }, 2000)

// console.log(total_due);

// push
// shift
// unshift
// splice
// filter
// reduce
// forEach
// concat
// map


total_due = names_list_1.filter(item => item.age < 26).reduce((sum, item) => sum + item.due, 0);

