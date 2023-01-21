import {Module} from '../core/module'

export class ShapeModule extends Module {
    constructor (type, text){
        super(text)
    }
    // функция для создания рандомного цвета
    #generateRandomColor() {
        const hexCodes = '0123456789ABCDEF'
        let color = ''
        for (let i = 0; i < 6; i++ ) {
            color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
        }
        return '#' + color
    }

    // функция для создания рандомной фигуры

    createRandomShape(){
        const body = document.querySelector('body')
        const shape = document.createElement('div')
        const size = this.#getRandomNumber(10, 100)
        const {width, height} = body.getBoundingClientRect()
        const x = this.#getRandomNumber(10, width - size)
        const y = this.#getRandomNumber(10, height - size)

        shape.classList.add('circle')
        shape.style.position = 'absolute'
        shape.style.width = `${this.#getRandomNumber(10, 100)}px`
        shape.style.height = `${this.#getRandomNumber(10, 100)}px`
        shape.style.top = `${y}px`
        shape.style.left = `${x}px`
        shape.style.borderRadius = `${this.#getRandomNumber(0, 60)}%`
        shape.style.backgroundColor = this.#generateRandomColor()

        body.append(shape)
    }

    #getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
}