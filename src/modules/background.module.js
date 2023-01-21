import {Module} from '../core/module'
console.log('hello world')

export class BackgroundModule extends Module {
    #randomColor = ['red','blue','green','skyblue','chartreuse','grey','brown']
    constructor(type, text) {
        super(type,text)

    }
    random(arr) {
        const rand = Math.floor(Math.random()*arr.length);
        const rValue = colorArray[rand];
        return rValue
    }
    trigger() {
       
    }
}