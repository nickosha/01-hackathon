export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
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