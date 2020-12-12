setInterval(setClock, 1000);
// refreshes the screen automatically

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");
// in square brackets targeting attributes

function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
  // ratio allows min and hour hand to mo

  setRotation(hourHand, hourRatio);
  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
