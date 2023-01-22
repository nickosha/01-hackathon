import {Menu} from './core/menu'

import {BackgroundModule} from './modules/background.module'
import {ShapeModule} from './modules/shape.module'
import {MessageModule} from './modules/message.module'
import {RandomSoundModule} from './modules/randomSound.module'
import {TimerModule} from './modules/timer.module'
import { reset } from './utils'

const modules = {}
modules.backgroundModule = new BackgroundModule('backgroundModule', 'Поменять цвет')
modules.shape = new ShapeModule('shape', 'Создать фигуру')
modules.showMessage = new MessageModule('showMessage', 'Вызвать сообщение')
modules.randomSound = new RandomSoundModule('randomSound', 'Воспроизвести звук')
modules.timer = new TimerModule('timer', 'Таймер')

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);

    }

    listener(event) {
        const {target} = event;
            if (target) {
                reset()
                const method = target.dataset.type
                modules[method].trigger()
                this.close()
            }
    }
    
    open(e) {
        this.el.addEventListener('click', this.listener)
        this.el.style.top = `${e.clientY}px`
        this.el.style.left = `${e.clientX}px`
        this.el.classList.add('open')
    }
    
    close() {
        this.el.classList.remove('open')
        this.el.removeEventListener('click', this.listener)
    }

    add() {
        for (let key in modules) {
            this.el.insertAdjacentHTML('beforeEnd', modules[key].toHTML())
        }
    }
}