import {Menu} from './core/menu'
import { Module } from './core/module';



export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
    }

    open() {
        window.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.el.style.top = `${e.clientY}px`;
            this.el.style.left = `${e.clientX}px`
            this.el.classList.add('open')
        })
    }
    close() {
        this.el.classList.remove('open')
    }
    add(obj) { 
        this.el.insertAdjacentHTML('beforeend', obj.toHTML())
    }
}
