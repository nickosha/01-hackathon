import {Module} from '@/core/module'
import sound from '../misc/The Prodigy - Smack My Bitch Up.mp3'
// https://youtu.be/6prlWtOBIX8

export class RandomSoundModule extends Module {
  trigger() {
    console.log('random sound module')
    const { audio, soundLogo} = this.addAudioToBody()
    this.preparation(audio, soundLogo)
    audio.play()
  }

  addAudioToBody() {
    const bodySelector = document.querySelector('body')
    bodySelector.style.display = 'flex'
    bodySelector.style.justifyContent = 'center'
    bodySelector.style.alignItems = 'center'
    bodySelector.style.margin = '0%'
    bodySelector.style.width = '100vw'
    bodySelector.style.minHeight = '100vh'
    bodySelector.style.background = '#1e1e1e'

    const audio = document.createElement('audio')
    audio.src = sound
    audio.id = 'id'
    bodySelector.append(audio)

    const soundLogo = document.createElement('div')
    soundLogo.id = 'logo'
    soundLogo.style.width = '500px'
    soundLogo.style.minHeight = '500px'
    soundLogo.style.borderRadius = '50%'
    soundLogo.style.background = 'orangered'
    bodySelector.append(soundLogo)

    return { audio, soundLogo }
  }

  preparation(audio, soundLogo) {
    const context = new AudioContext()
    const analyser = context.createAnalyser()
    const src = context.createMediaElementSource(audio)
    src.connect(analyser)
    analyser.connect(context.destination)
    this.loop(analyser, soundLogo)
  }

  loop(analyser, soundLogo) {
    // console.log(this.loop)
    // window.requestAnimationFrame(this.loop) // Uncaught TypeError: Cannot read properties of undefined (reading 'loop')
    const array = new Uint8Array(analyser.frequencyBinCount)
    analyser.getByteFrequencyData(array)

    soundLogo.minHeight = (array[40]) + "px"
    soundLogo.width = (array[40]) + "px"
  }
}