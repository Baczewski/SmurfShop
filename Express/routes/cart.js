const router = require('express').Router()
const controllers = require('../controllers')
const { auth } = require('../utils')

router.get('/', auth.forbidGuests, controllers.cart.get.all)

router.get('/:id', auth.forbidGuests, controllers.cart.get.one)

router.post('/', auth.forbidGuests, controllers.cart.post.createOne)

router.post('/checkout', auth.forbidGuests, controllers.cart.post.checkout)

router.delete('/', auth.forbidGuests, controllers.cart.delete.all)

router.delete('/:id', auth.forbidGuests, controllers.cart.delete.one)

module.exports = router