export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function updateTimer(time) {
  const daysValue= document.querySelector('#days')
  const hoursValue = document.querySelector('#hours')
  const minutesValue = document.querySelector('#minutes')
  const secondsValue = document.querySelector('#seconds')

  const daysText = document.querySelector('.timer-block_days .timer-block_text');
	const hoursText = document.querySelector('.timer-block_hours .timer-block_text');
	const minutesText = document.querySelector('.timer-block_minutes .timer-block_text');
	const secondsText = document.querySelector('.timer-block_seconds .timer-block_text');

  let remain = time

  let days = Math.floor(remain / (1000 * 60 * 60 * 24))
  remain = remain % (1000 * 60 * 60 * 24)

  let hours = Math.floor(remain / (1000 * 60 * 60))
  remain = remain % (1000 * 60 * 60)

  let minutes = Math.floor(remain / (1000 * 60))
  remain = remain % (1000 * 60)

  let seconds = Math.floor(remain / (1000))
  remain = remain % (1000)

  let daysArr = {
    one: 'день',
    few: 'дня',
    many: 'дней',
  }
  let hoursArr = {
    one: 'час',
    few: 'часа',
    many: 'часов',
  }
  let minutesArr = {
    one: 'минута',
    few: 'минуты',
    many: 'минут',
  }
  let secondsArr = {
    one: 'секунда',
    few: 'секунды',
    many: 'секунд',
  }

  let daysForm = new Intl.PluralRules('ru-RU').select(days);
  let hoursForm = new Intl.PluralRules('ru-RU').select(hours);
  let minutesForm = new Intl.PluralRules('ru-RU').select(minutes);
  let secondsForm = new Intl.PluralRules('ru-RU').select(seconds);

  daysValue.innerHTML = days < 10 ? `0${days}` : days
  hoursValue.innerHTML = hours < 10 ? `0${hours}` : hours
  minutesValue.innerHTML = minutes < 10 ? `0${minutes}` : minutes
  secondsValue.innerHTML = seconds < 10 ? `0${seconds}` : seconds

  daysText.innerHTML = daysArr[daysForm]
  hoursText.innerHTML = hoursArr[hoursForm]
  minutesText.innerHTML = minutesArr[minutesForm]
  secondsText.innerHTML = secondsArr[secondsForm]
}

export function reset() {
  document.body.querySelectorAll('*:not(#menu, .menu-item)').forEach(node => node.remove())
  const allInterval = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
  for (let i = 1; i < allInterval; i++) {
      window.clearInterval(i);
  }
}

 // функция для создания рандомного цвета
export function generateRandomColor() {
  const hexCodes = '0123456789ABCDEF'
  let color = ''
  for (let i = 0; i < 6; i++ ) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
  }
  return '#' + color
}