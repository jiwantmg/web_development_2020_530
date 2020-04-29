function add(a, b) {
     console.log(a + b)
}

function multi(a, b) {
    console.log(a * b);
}

function sumNumber(a, b, callback) {
   console.log("Adding two number");
   callback(a, b);
}

sumNumber(2,4, multi);