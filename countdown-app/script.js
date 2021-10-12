var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minutesEl = document.getElementById('minutes');
var secondsEl = document.getElementById('seconds');

function countDown(){
    var dateNow = new Date(); //"now"
    var newYears = new Date("2022/01/01"); 
    var diff = Math.abs(newYears - dateNow);
    //var secondsInDay = 86400;
    console.log(diff);

    var totalSeconds = (newYears - dateNow) / 1000;

    var days = Math.floor(totalSeconds / 86400);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var mins = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds) % 60;

    // console.log(days,hours,minutes,seconds);
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = mins;
    secondsEl.textContent = seconds;

}

countDown();
setInterval(countDown, 1000);