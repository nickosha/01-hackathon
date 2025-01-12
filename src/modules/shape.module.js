import { Module } from '../core/module'
import { generateRandomColor } from '../utils'
import { random } from '../utils'

export class ShapeModule extends Module {
    constructor (type, text){
        super(type, text)
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
        
        setTimeout(() => {
            shape.remove()
        }, 1000)
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
      }
  
}