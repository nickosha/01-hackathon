import {Module} from '../core/module'

export class ClicksModule extends Module {
    counter
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        let counter = 0
        const body = document.querySelector('body')
        body.addEventListener('click', () => counter += 1)
        setTimeout(() => {
            body.removeEventListener('click', () => counter += 1)
            alert(`Было сделано: ${counter} кликов`)
        }, 3000)
    }
    toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}