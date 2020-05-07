export default function quesOne(){
    let arra1 = [1, 2, [4, 0]];
    let array_Clone = function(arra1) {
    return arra1.slice(0);
       };
   console.log(array_Clone([1, 2, 4, 0]));
   console.log(array_Clone(arra1));
}