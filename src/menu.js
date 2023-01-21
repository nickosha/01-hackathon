import {Menu} from './core/menu'

import {BackgroundModule} from './modules/background.module'

let backgroundModule = new BackgroundModule('back', 'Изменить цвет')

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);

        this.el.addEventListener('click', (event) => {
            const {target} = event;
            if (target) {
                console.log(backgroundModule.trigger())
            }

            this.close()
        })
    }

    open() {
        this.el.classList.add('open')
    }
    
    close() {
        this.el.classList.remove('open')

    }

    add() {
        this.el.append(backgroundModule.toHTML())  
    }
}