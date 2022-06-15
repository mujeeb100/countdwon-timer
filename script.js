"use strict";

const daysEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondEl = document.getElementById("seconds");

const newYears = "1 jan 2023";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hourEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondEl.innerHTML = formatTime(seconds);

  //   console.log(days, hours, mins);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//intial call
countdown();
setInterval(countdown, 1000);
