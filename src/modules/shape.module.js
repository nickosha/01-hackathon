import { Module } from '../core/module'
import { generateRandomColor } from '../core/utils'
import { random } from '..core/utils'

export class ShapeModule extends Module {
    constructor (type,){
        super(type)
    }
    trigger() {
        const body = document.querySelector('body')
        const shape = document.createElement('div')
        const size = random(10, 100)
        const {width, height} = body.getBoundingClientRect()
        const x = random(10, width - size)
        const y = random(10, height - size)
        shape.classList.add('circle')
        shape.style.position = 'absolute'
        shape.style.width = `${random(10, 100)}px`
        shape.style.height = `${random(10, 100)}px`
        shape.style.top = `${y}px`
        shape.style.left = `${x}px`
        shape.style.borderRadius = `${random(0, 60)}%`
        shape.style.backgroundColor = generateRandomColor()
        body.append(shape)
        setTimeout(shape.remove(), 1000)
    }

    toHTML() {
        const createShape = document.createElement('li')
        createShape.classList = 'menu-item'
        createShape.dataset = `${this.type}`
        createShape.textContent = 'Создать фигуру'

        return createShape
      }
  
}