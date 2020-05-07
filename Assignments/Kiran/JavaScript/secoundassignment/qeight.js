export default function quesEight(){
    let str = window.prompt();
    str.toString();
    console.log("String before swap = " + str);
    function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
    console.log(swapcase(str));
}