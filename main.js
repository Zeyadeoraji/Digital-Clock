const hoursUp = document.querySelector(".hour");
const minuteUp = document.querySelector(".minute");
const SecondUp = document.querySelector(".Second");
const ampmEl = document.querySelector(".ampm");
function updateClock() {
  let hoursEl = new Date().getHours();
  let minuteEl = new Date().getMinutes();
  let secoundEl = new Date().getSeconds();
  let isAM = "Am";

  if (hoursEl > 12) {
    hoursEl = hoursEl - 12;
    isAM = "Pm";
    //   console.log(hoursEl);
  }

  hoursEl = hoursEl < 10 ? "0" + hoursEl : hoursEl;
  minuteEl = minuteEl < 10 ? "0" + minuteEl : minuteEl;
  secoundEl = secoundEl < 10 ? "0" + secoundEl : secoundEl;

  hoursUp.innerHTML = hoursEl;
  minuteUp.innerHTML = minuteEl;
  SecondUp.innerHTML = secoundEl;
  ampmEl.innerHTML = isAM;

  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
