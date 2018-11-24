import GiftService from "./gift-service.js"

let _gS = new GiftService()

function draw() {
  let template = ''
  _gS.gifts.forEach(gift => {
    template += `
    <div onclick="app.controllers.giftController.delete('${gift._id}')">${gift.name}</div>
    `
  })

}

export default class GiftController {
  constructor() {
    _gS.getGifts(draw)
  }
  delete(id) {
    _gS.delete(id, draw)
  }
}