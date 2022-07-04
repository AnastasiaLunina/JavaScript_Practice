// Minutes
const timerMin = 1;
// Seconds
let timerSec = timerMin * 60;

function calculateTime() {
    let countdown = document.querySelector(".countdown");
    let minutes = Math.floor(timerSec / 60);
        minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = timerSec % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;

    countdown.textContent = `${minutes} : ${seconds}`;
    timerSec--;

    function startDownload() {  
     const url='https://yadi.sk/d/D1E70Br8eD37iA';    
     window.location.assign(url);
}

    if (timerSec < 0) {
        stopTimer();
        startDownload();
        // alert("Вот и все!");
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }
}

let timerInterval = setInterval(calculateTime, 1000);










function countDown () {
    const concertDate = new Date ("March 20, 2028 00:00");
    const currentDate = new Date();
    const diff = concertDate - currentDate;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff % msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff % msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff % msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerId);
    }

}

let timerId = setInterval(countDown, 1000);

function merryChristmas() {
    const heading = document.querySelector('h1');
    heading.textContent = 'MERRY CHRISTMAS!!! HO-HO-HO!';
    heading.classList.add('red')
}


