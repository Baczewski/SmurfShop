const models = require('../models')

module.exports = {
    get: {
        all: async (req, res, next) => {
            const { _id: userId } = req.user
            const cartItems = await models.CartItem.find({ creatorId: userId })
            res.json(cartItems)
        },
        one: async (req, res, next) => {
            try {
                const { id } = req.params
                const cartItem = await models.CartItem.findOne({ _id: id })
                res.json(cartItem)

            } catch (err) {
                next(err)
            }
        }
    },
    post: {
        createOne: async (req, res, next) => {
            try {
                const user = req.user
                const { name, price, username, password } = req.body
                const cartItem = await models.CartItem.create({ name, price, creatorId: user._id, username, password })
                await models.User.updateOne({ _id: user._id }, { $push: { cartItems: cartItem._id } })
                res.json(cartItem)

            } catch (err) {
                next(err)
            }
        },
        checkout: async (req, res, next) => {
            try {
                const user = req.user
                const data = req.body

                const orders = data.map(({ name, price, creatorId, username, password }) => ({ name, price, creatorId, username, password }))
                const inserted = await models.Order.insertMany(orders)

                const ordersIDs = inserted.reduce((acc, order) => {
                    acc.push(order._id)
                    return acc
                }, [])

                const ordersNames = inserted.reduce((acc, order) => {
                    acc.push(order.name)
                    return acc
                }, [])


                await Promise.all([
                    models.CartItem.deleteMany({ creatorId: user._id }),
                    models.User.updateOne({ _id: user._id }, { $set: { cartItems: [] } }),
                    models.User.updateOne({ _id: user._id }, { $push: { orders: { $each: ordersIDs } } }),
                    models.Smurf.updateMany({ type: { $in: ordersNames } }, { $inc: { ordersCount: 1 } })
                ])

                res.json(inserted)

            } catch (err) {
                next(err)
            }
        }
    },
    delete: {
        all: async (req, res, next) => {
            try {
                const user = req.user
                const [deleteInfo, updateInfo] = await Promise.all([
                    models.CartItem.deleteMany({ creatorId: user._id }),
                    models.User.updateOne({ _id: user._id }, { $set: { cartItems: [] } })
                ])
                res.json(deleteInfo)

            } catch (err) {
                next(err)
            }
        },
        one: async (req, res, next) => {
            try {
                const user = req.user
                const { id: _id } = req.params

                const [deleteInfo, updateInfo] = await Promise.all([
                    models.CartItem.deleteOne({ _id }),
                    models.User.updateOne({ _id: user._id }, { $pull: { cartItems: _id } })
                ])
                res.json(deleteInfo)

            } catch (err) {
                next(err)
            }
        }
    }
}