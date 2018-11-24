// @ts-ignore
let api = axios.create({
  baseURL: "/api/gifts"
})

let _gifts = []

export default class GiftService {
  delete(id, draw) {
    api.delete(id).then(res =>
      this.getGifts(draw))
  }
  getGifts(getGiftsCallBack) {
    api.get('').then(res => {
      console.log(res.data)
      _gifts = res.data
      getGiftsCallBack()
    })
  }
  get gifts() {
    return _gifts
  }
}