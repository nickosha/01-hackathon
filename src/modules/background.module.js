import {Module} from '../core/module'

export class BackgroundModule extends Module { 
    #randomColorArr = ['linear-gradient(45deg, blue, red)',
    'blue',
    'green',
    'skyblue',
    'chartreuse',
    'linear-gradient(55deg, green, skyblue)',
    'linear-gradient(45deg, orange 0 50%, skyblue 50% 100%)',
    'linear-gradient(0deg, blue, green 40%, red)',
    'linear-gradient(45deg, red 0 50%, blue 50% 100%)'
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