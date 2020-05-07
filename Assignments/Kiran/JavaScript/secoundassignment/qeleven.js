export default function quesEleven(){
    let arr1 = [1, 2, 3];
    let arr2 = [2, 30, 1];
    function merge(arr1,arr2){
        let arr3 = new Set(arr1.concat(arr2));
        return console.log(arr3);
    }
    console.log("before merge");
    console.log(arr1.concat(arr2));
    console.log("after merge");
    merge(arr1,arr2);
}