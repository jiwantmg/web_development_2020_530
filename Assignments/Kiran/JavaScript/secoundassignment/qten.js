export default function quesTen(){
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log("Before shuffle");
    console.log(arr);
    function shuffle(arra1) {
        let ctr = arra1.length, temp, index;
    
        // While there are elements in the array
        while (ctr > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * ctr);
            // Decrease ctr by 1
            ctr--;
            // And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
    console.log("After shuffle");
    console.log(shuffle(arr));
}