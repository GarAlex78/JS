//"April 10, 2020"

const refs = {
  spanDays: document.querySelector("span[data-value='days']"),
  spanHours: document.querySelector("span[data-value='hours']"),
  spanMins: document.querySelector("span[data-value='mins']"),
  spanSecs: document.querySelector("span[data-value='secs']")
};
const { spanDays, spanHours, spanMins, spanSecs } = refs;
class Countdown {
  constructor(targetDate) {
    this.targetDate = new Date(targetDate);
  }
  intervalId = setInterval(() => {
    updateClockFace(this.targetDate - Date.now());
  }, 1000);
}
function updateClockFace(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  spanDays.textContent = pad(days);
  spanHours.textContent = pad(hours);
  spanMins.textContent = pad(mins);
  spanSecs.textContent = pad(secs);
  if (time < 1000) {
    clearInterval(action.intervalId);
  }
}
function pad(value) {
  return String(value).padStart(2, "0");
}
/*
  Для проверки
  */
const action = new Countdown("April 10, 2020");
