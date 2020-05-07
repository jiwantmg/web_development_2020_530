export default function quesTwo(){
    let arr1 = [7, 9, 0, -2];
    let arr2 = [[],3];
    let arr3 = [[7, 9, 0, -2],3];
    let arr4 = [[7, 9, 0, -2],6];
    let arr5 = [[7, 9, 0, -2],-3];
    function first(arr, n)
    {
        let index = n ? n-1  : 1;
        return arr.slice(0, index);
    }
   console.log(first(arr1));
   console.log(first(arr2,1));
   let fe = arr3[0];
   console.log(first(fe,4));
   console.log(first(arr4));
   console.log(first(arr5,1));
}