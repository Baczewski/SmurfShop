const mongoose = require('mongoose')
const { Schema } = mongoose

const CartSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: [true, 'Item is required!']
    },
    price: {
        type: Schema.Types.String,
        required: [true, 'Order price is required!']
    },
    username: {
        type: Schema.Types.String,
        required: [true, 'Username is required!']
    },
    password: {
        type: Schema.Types.String,
        required: [true, 'Password is required!']
    },
    date: {
        type: Schema.Types.String,
        default: new Date(Date.now()).toLocaleString()
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Creator is required!']
    }
})

module.exports = mongoose.model('CartItem', CartSchema)