let daysText = document.getElementById('days');
let hoursText = document.getElementById('hours');
let minutesText = document.getElementById('minutes');
let secondsText = document.getElementById('seconds');
let headingYear = document.getElementById('year');

let anotherYear = 2025;

let myvid = document.getElementById('myVideo');
let newYearBtn = document.getElementById('happy-new-year');
let modal = document.getElementById('modal');
let closeBtn = document.getElementById('close');

function countDown() {
    let newYear = new Date("January 1, " + anotherYear + " 00:00:00").getTime();
    let currentTime = new Date().getTime();
    let remaining = newYear - currentTime;


    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    daysText.innerHTML = Math.floor(remaining / days);
    hoursText.innerHTML = Math.floor((remaining % days) / hours);
    minutesText.innerHTML = Math.floor((remaining % hours) / minutes);
    secondsText.innerHTML = Math.floor((remaining % minutes) / seconds);

    if(remaining <= 0) {
      modal.style.display = "flex";
    }

    headingYear.innerHTML = anotherYear;
}

let myCountDown = setInterval(countDown, 1000);

newYearBtn.addEventListener('click', click);

function click() {
    newYearBtn.style.display = "none";
    myvid.style.display = "block";
    closeBtn.style.display = "flex";
    myvid.play();
} 

closeBtn.addEventListener('click', closeFunc);

function closeFunc() {
    modal.style.display = "none";
    myvid.pause();
} 

