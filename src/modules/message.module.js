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
                }
                catch(ex) {
                    console.log(ex)
                }
            }
            const message = document.createElement('p')
            message.className = 'message'
            getQuotes()
            document.body.append(message)

            setTimeout(() => { message.remove() }, 3000)
        }
    }
}