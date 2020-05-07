export default function quesFour(){
    let myColor = ["Red", "Green", "White", "Black"];
   console.log(myColor);
   function color(n){
       let colors = myColor.join(n);
       return colors.toString();
   }
   console.log(color(""));
   console.log(color());
   console.log(color("+"));
}