import {Module} from '../core/module'

export class BackgroundModule extends Module { 
    #randomColorArr = ['red','blue','green','skyblue','chartreuse','grey','brown']
    constructor(type, text) {
        super(type,text)

    }
    random(arr) { 
        const rand = Math.floor(Math.random()*arr.length);
        const rValue = arr[rand];
        return rValue
    }
    trigger() {
    const colorRandom = this.random(this.#randomColorArr)
    document.body.style.backgroundColor = colorRandom
    }
}