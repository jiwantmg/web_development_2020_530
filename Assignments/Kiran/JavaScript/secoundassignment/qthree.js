export default function quesThree(){
    function firstelement(arr)
    {
        return arr[0];
    }
    function first(arr, n)
    {
        firstelement(arr);
        let index = n ? n  : 0;
        return arr.slice(index, arr.length);
    }
   let arr1 = [7, 9, 0, -2];
   console.log(first(arr1,3));

   let arr2 = [[7, 9, 0, -2],3];
   console.log(first(arr2,1));

   let arr3 = [[7, 9, 0, -2],6];
   console.log(firstelement(arr3));
}