const router = require('express').Router() //STEP 5, CREATING THE ROUTE IN WHICH GIFTS WILL BE ACCESSED
let Gift = require('../models/gift')

router.get('/', (req, res, next) => { //STEP 6, GET ALL THE GIFTS
  console.log('JINGLE BELLS')
  next()
})

router.get('/', (req, res, next) => { //STEP 7, GET THE GIFT BY THE ID
  Gift.find({})
    .then(gifts => {
      res.send(gifts)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/', (req, res, next) => { //STEP 8, CREATE A GIFT
  Gift.create(req.body)
    .then(gift => {
      res.send(gift)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/:giftId', (req, res, next) => { //STEP 9, UPDATE/EDIT EACH GIFT /api/gifts/:id
  Gift.findByIdAndUpdate(req.params.giftId, req.body, { new: true })
    .then(gift => {
      res.send(gift)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/:id', (req, res, next) => { //STEP 10, DELETE EACH GIFT BY ID
  Gift.findByIdAndDelete(req.params.id)
    .then(deletedGift => {
      res.send('Deleted Gift')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router