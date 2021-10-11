var date;
var currendDate;
var currendTime;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {

    date = new Date();
    currendTime = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    currendDate = date.toLocaleDateString(undefined, options);
    document.getElementById("time").innerHTML = currendTime + "<br> on " + currendDate;
}, 1000);