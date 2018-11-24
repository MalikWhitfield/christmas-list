import GiftController from "./components/gift-controller.js"

console.log('HERE IS THE CHRISMAS LIST APP')

class App {
  constructor() {
    this.controllers = {
      giftController: new GiftController()
    }
  }
}

// @ts-ignore
window.app = new App()