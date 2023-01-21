import { Module } from '../core/module'

export class MessageModule extends Module {
    trigger() {
        const quotes = ['000', '001', '010', '011', '100', '101', '110', '111']
        const message = document.createElement('p')
        message.textContent = quotes[random(0, quotes.length - 1)]
        document.body.append(message)
        setTimeout(() => { text.remove() }, 5000)
    }
}