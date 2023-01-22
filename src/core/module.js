export class Module {
  constructor(type, text) {
    if (!type) {
      throw new Error('Please specify "type" param')
    }
    if (!text) {
      throw new Error('Please specify "text" param')
    }
    this.type = type
    this.text = text
  }

  reset() {
    document.body.querySelectorAll('*:not(#menu, .menu-item)').forEach(node => node.remove())
    const allInterval = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
    for (let i = 1; i < allInterval; i++) {
        window.clearInterval(i);
    }
  }

  trigger() {
    throw new Error(`Trigger method should be implemented in module "${this.type}"`)
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}