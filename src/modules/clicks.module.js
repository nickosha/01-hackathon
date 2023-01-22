import {Module} from '../core/module'

export class ClicksModule extends Module {
    #iscoutDown = 5
    #valueClick = 0
    constructor(type,text) {
        super(type,text)
    }

    trigger () {
        const body1 = document.createElement('div')
        const spanClick = document.createElement('span')
        spanClick.classname = 'clickClass'
        body1.className = 'clickbody'
        setInterval(() => {
                    console.log(this.#iscoutDown)
                    this.#iscoutDown--
                 },1000)
        document.body.append(body1)
        body1.addEventListener('click', () => {
            this.#valueClick++
            spanClick.textContent = this.#valueClick
            body1.append(spanClick)
        })
       
    //    const span = document.querySelector('.clickClass')
    //    if(this.#iscoutDown === 0) {
    //     span = `количество кликов: ${this.#valueClick}` 
    //     document.body.append(span)
    //     clearInterval(clickNumber)
    // }else{
    //     const clickNumber = setInterval(() => {
    //         console.log(this.#iscoutDown)
    //         this.#iscoutDown--
    //         this.#valueClick++
    //      },1000)
    // }
       
     

     }

}