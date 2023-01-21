import { Module } from '../core/module'
import { random } from '../utils'

export class MessageModule extends Module {
    trigger() {
        if (document.querySelector('.message') === null) {
            const quotes = ['000', '001', '010', '011', '100', '101', '110', '111']
            const message = document.createElement('p')
            message.className = 'message'
            message.textContent = quotes[random(0, quotes.length - 1)]
            document.body.append(message)
            setTimeout(() => { message.remove() }, 5000)
        }
    }
}