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
        spanClick.style.cssText = `
        color: black;
        font-size: 30px;
        color: #343434;
        border: 2px solid inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px auto;
        background-color: rgb(158, 152, 152);
        height: auto;
        min-width: 300px;
        `
        body1.className = 'clickbody'
        setInterval(() => {
                    console.log(this.#iscoutDown)
                    this.#iscoutDown--
                 },1000)
        document.body.append(body1)
        body1.addEventListener('click', () => {
            this.#valueClick++
            spanClick.textContent = `количество кликов: ${this.#valueClick}` 
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