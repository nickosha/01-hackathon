import {ContextMenu} from '../menu'

export default class App {
    #contextMenu;

    constructor() {
        this.#contextMenu = new ContextMenu('#menu')
    }

    run() {
        this.#contextMenu.add()

        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.#contextMenu.open(e)
        
        })
    }
}