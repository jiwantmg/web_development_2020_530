let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thurtday", "Friday", "Saturday"];
let date = new Date();
let hours = date.getHours();
// let hours = 20;
console.log("Today is : " + days[date.getDay()])
if (hours <= 12)
    console.log("Current time is : " + hours + " AM "+ ":" + date.getMinutes() + ":" + date.getSeconds())
else{
    console.log("Current time is : " + (hours-12) + " PM "+ ":" + date.getMinutes() + ":" + date.getSeconds())
}

