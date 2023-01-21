import {Menu} from './core/menu'

import {BackgroundModule} from './modules/background.module'
import {ShapeModule} from './modules/shape.module'
import {MessageModule} from './modules/message.module'

const modules = {}
modules.backgroundModule = new BackgroundModule('backgroundModule', 'Поменять цвет')
modules.shape = new ShapeModule('shape', 'Создать фигуру')
modules.showMessage = new MessageModule('showMessage', 'Вызвать сообщение')

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);

        this.el.addEventListener('click', (event) => {
            const {target} = event;
            if (target) {
                const method = target.dataset.type
                modules[method].trigger()
            }

            this.close()
        })
    }

    open(e) {
        this.el.style.top = `${e.clientY}px`
        this.el.style.left = `${e.clientX}px`
        this.el.classList.add('open')
    }
    
    close() {
        this.el.classList.remove('open')
    }

    add() {
        for (let key in modules) {
            this.el.insertAdjacentHTML('beforeEnd', modules[key].toHTML())
        }
    }
}