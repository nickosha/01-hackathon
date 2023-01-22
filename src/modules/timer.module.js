import {Module} from '../core/module'
import { updateTimer } from '../utils';

export class TimerModule extends Module {
    #inputBlock;
    #timerBlock;

    constructor(type, text){
        super(type, text)
        this.#inputBlock = document.createElement('div')
        this.#timerBlock = document.createElement('div')
    }

    #openInputBlock() {
        this.#inputBlock.className = 'timer-input-block'

        const closeBtn = document.createElement('div')
        closeBtn.className = 'close-btn'
        closeBtn.onclick = () => {this.reset()}

        this.#inputBlock.append(closeBtn)

        const inputBlockContainer = document.createElement('div')
        inputBlockContainer.className = 'timer-input-block_container'
        this.#inputBlock.append(inputBlockContainer)

        const inputForTime = document.createElement('input')
        inputForTime.type = 'number'
        inputForTime.name = 'timer'
        inputForTime.className = 'timer-input-block_input'
        inputForTime.placeholder = 'Укажите время в минутах'
        inputForTime.min = 1

        const buttonStartTimer = document.createElement('button')
        buttonStartTimer.className = 'timer-input-block_btn'
        buttonStartTimer.textContent = 'Запустить'
        buttonStartTimer.onclick = () => {this.#createTimerBlock(inputForTime.value)}

        inputBlockContainer.append(inputForTime, buttonStartTimer)

        document.body.append(this.#inputBlock)
    }

    #createSeparator() {
        const timerSeparator = document.createElement('div')
        timerSeparator.className = 'timer-block_separator'
        timerSeparator.innerHTML = ':'

        return timerSeparator
    }

    #createTimerBlock(value) {
        debugger;
        this.reset()

        if(!value) {
            alert('Таймер не был запущен, так как не было указано время')
        } else {
            let time = value * 60000

            this.#timerBlock.className = 'timer-block'

            const timerTitle = document.createElement('h2')
            timerTitle.className = 'timer-block_title'
            timerTitle.innerHTML = 'До закрытия окна таймера осталось:'

            this.#timerBlock.append(timerTitle)

            const timerContent = document.createElement('div')
            timerContent.className = 'timer-block_content'

            this.#timerBlock.append(timerContent)

            const timerSeparatorOne = this.#createSeparator()
            const timerSeparatorTwo = this.#createSeparator()
            const timerSeparatorThree = this.#createSeparator()

            const daysContainer = document.createElement('div')
            daysContainer.classList.add('timer-block_item', 'timer-block_days')
    
            const days = document.createElement('div')
            days.id = 'days'
            days.className = 'timer-block_value'
            const daysText = document.createElement('span')
            daysText.className = 'timer-block_text'

            daysContainer.append(days, daysText)
    
            const hoursContainer = document.createElement('div')
            hoursContainer.classList.add('timer-block_item', 'timer-block_hours')
    
            const hours = document.createElement('div')
            hours.id = 'hours'
            hours.className = 'timer-block_value'
            const hoursText = document.createElement('span')
            hoursText.className = 'timer-block_text'

            hoursContainer.append(hours, hoursText)
    
            const minutesContainer = document.createElement('div')
            minutesContainer.classList.add('timer-block_item', 'timer-block_minutes')
    
            const minutes = document.createElement('div')
            minutes.id = 'minutes'
            minutes.className = 'timer-block_value'
            const minutesText = document.createElement('span')
            minutesText.className = 'timer-block_text'

            minutesContainer.append(minutes, minutesText)
    
            const secondsContainer = document.createElement('div')
            secondsContainer.classList.add('timer-block_item', 'timer-block_seconds')
    
            const seconds = document.createElement('div')
            seconds.id = 'seconds'
            seconds.className = 'timer-block_value'
            const secondsText = document.createElement('span')
            secondsText.className = 'timer-block_text'

            secondsContainer.append(seconds, secondsText)
    
            timerContent.append(daysContainer, timerSeparatorOne, hoursContainer, timerSeparatorTwo, minutesContainer, timerSeparatorThree, secondsContainer)
            
            document.body.append(this.#timerBlock)
            
            updateTimer(time)
            let interval = setInterval( () => {
                time -= 1000
                updateTimer(time)
                if(time === 0) {
                    clearInterval(interval)
                    this.reset()
                }
            }, 1000)
        }
    }
    trigger() {
        const timer = document.querySelector(`[data-type="${this.type}"]`)
        timer.addEventListener('click', () => {
            this.reset()
            this.#openInputBlock()
        })
    }
    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}