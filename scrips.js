setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock () {
const currentDate = new Date;
const secondRatio = currentDate.getSeconds()/60;
const minuteRatio = (secondRatio + currentDate.getMinutes()) /60;
const hourRation = (minutesRation + currentDate.getHours()) /60;

setRotation(hour-hand, hourRatio);
setRotation(secondHand, secondRatio);
setRotation(minuteHand, minuteRatio);

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRation * 360);
}

setClock()

