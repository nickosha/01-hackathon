import {Module} from '../core/module'
// Аналитика кликов (за установленное вами время) или Случайный звук

export class RandomSoundModule extends Module {
  trigger() {
    console.log('random sound module')
  }


}