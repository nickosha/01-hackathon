import './styles.css'

import { ContextMenu } from './menu'

let menu = new ContextMenu('#menu')
menu.add()

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.log(menu);
    console.log(menu.el)
    menu.open()

})