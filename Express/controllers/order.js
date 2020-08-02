const models = require('../models')

module.exports = {
    get: {
        all: async (req, res, next) => {
            const user = req.user
            let orders = []

            if (user.role === 'admin') {
                orders = await models.Order.find({ status: 'Pending' }).populate('creatorId', 'username')
                return res.json(orders)
            }

            orders = await models.Order.find({ creatorId: user._id })
            res.json(orders)
        },
        one: async (req, res, next) => {
            try {
                const { id } = req.params
                const order = await models.Order.findOne({ _id: id }).populate('creatorId', 'username')
                res.json(order)
            } catch (err) {
                next(err)
            }
        }
    },
    post: {
        one: async (req, res, next) => {
            try {
                const user = req.user
                const { name, price, username, password } = req.body
                const order = await models.Order.create({ name, price, creatorId: user._id, username, password })
                await models.User.updateOne({ _id: user._id }, { $push: { orders: order._id } })
                res.json(order)

            } catch (err) {
                next(err)
            }
        },
        many: async (req, res, next) => {
            try {
                const user = req.user
                const data = req.body
                const orders = data.map(({ name, price, creatorId, username, password }) => ({ name, price, creatorId, password, username }))
                const inserted = await models.Order.insertMany(orders)

                let insertedIDs = []
                inserted.forEach(({ _id }) => insertedIDs.push(_id))
                await models.User.updateOne({ _id: user._id }, { $push: { orders: { $each: insertedIDs } } })
                res.json(inserted)

            } catch (err) {
                next(err)
            }
        }
    },
    put: {
        one: async (req, res, next) => {
            try {
                const id = req.params
                const { name, price, username, password } = req.body
                const updated = await models.Order.updateOne({ _id: id }, { name, price, username, password })
                res.json(updated)

            } catch (err) {
                next(err)
            }
        },
        editStatus: async (req, res, next) => {
            try {
                const { id } = req.params
                const { status } = req.body
                const updated = await models.Order.updateOne({ _id: id }, { status })
                res.json(updated)

            } catch (err) {
                next(err)
            }
        },
        delete: async (req, res, next) => {
            try {
                const { id } = req.params
                const info = await models.Order.deleteOne({ _id: id })
                res.json(info)

            } catch (err) {
                next(err)
            }
        }
    }
}