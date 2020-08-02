const routers = require('../routes')
const router = require('../routes/order')

module.exports = (app) => {

    app.use('/api/user', routers.user)

    app.use('/api/smurf', routers.smurf)

    app.use('/api/cart-items', routers.cart)

    app.use('/api/orders', routers.order)
}