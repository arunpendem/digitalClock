var date=new Date()
var day=date.getDay()
console.log(day)
var hours=date.getHours()
console.log(hours)
var minutes=date.getMinutes()
console.log(minutes)
var daysInWeek=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
var today=daysInWeek[day]
if(hours<12)
console.log("Good morning.The time is "+hours+" hours "+minutes+" minutes AM.Today is "+today)
else if(hours>12&&hours%12<=4)
console.log("Good Afternoon.The time is "+hours%12+" hours "+minutes+" minutes PM.Today is "+today)
else
console.log("Good Evening.The time is "+hours%12+" hours "+minutes+" minutes PM.Today is "+today)

