import { Module } from '../core/module'
import { random } from '../utils'

export class MessageModule extends Module {
    trigger() {
        if (document.querySelector('.message') === null) {
            async function getQuotes() {
                try {
                    const result = await fetch('https://type.fit/api/quotes');
                    const data = await result.json();
                    const randomIndex = random(0, data.length - 1);
                    message.textContent = data[randomIndex].text
                } catch (error) {
                    console.log(error)
                }
            }
            const message = document.createElement('p')
            message.className = 'message'
            getQuotes()
            document.body.append(message)
            setTimeout(() => message.className += ' hidden', 3000)
            setTimeout(() => { message.remove() }, 4000)
        }
    }
}
