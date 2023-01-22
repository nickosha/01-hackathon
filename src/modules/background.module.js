import {Module} from '../core/module'

export class BackgroundModule extends Module { 
    #randomColorArr = [
    'linear-gradient(45deg, blue, red)',
    'radial-gradient(circle, rgba(0,36,20,1) 20%, rgba(125,195,174,1) 74%, rgba(0,212,255,1) 83%, rgba(147,214,214,1) 83%)',
    'linear-gradient(90deg, rgba(255,255,255,1) 21%, rgba(29,53,253,1) 50%, rgba(252,69,69,1) 86%)',
    'skyblue',
    'radial-gradient(circle, rgba(174,238,226,1) 46%, rgba(233,148,197,1) 63%)',
    'linear-gradient(55deg, green, skyblue)',
    'linear-gradient(45deg, orange 0 50%, skyblue 50% 100%)',
    'linear-gradient(0deg, blue, green 40%, red)',
    'linear-gradient(45deg, white 33% 33%, blue 33% 100%, red 0 33%,)',
    'radial-gradient(circle, rgba(197,200,124,1) 35%, rgba(175,33,62,1) 100%)',
]
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
    document.body.style.background = colorRandom
    }
}