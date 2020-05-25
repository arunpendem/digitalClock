var date=new Date()
var day=date.getDay()
var hours=date.getHours()
var minutes=date.getMinutes()
var daysInWeek=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
var today=daysInWeek[day]
if(hours<12)
document.write("Good morning.The time is "+hours+" hours "+minutes+" minutes AM.Today is "+today)
else if(hours>12&&hours%12<=4)
document.write("Good Afternoon.The time is "+hours%12+" hours "+minutes+" minutes PM.Today is "+today)
else
document.write("Good Evening.The time is "+hours%12+" hours "+minutes+" minutes PM.Today is "+today)

