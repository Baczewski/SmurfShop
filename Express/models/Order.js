const mongoose = require('mongoose')
const { Schema } = mongoose

const OrderSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: [true, 'Order name is required!']
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
    status: {
        type: Schema.Types.String,
        enum: ['Pending', 'Accepted', 'Declined'],
        default: 'Pending'
    },
    date: {
        type: Schema.Types.String,
        default: new Date(Date.now()).toLocaleString()
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Creator id is required!']
    }
})

module.exports = mongoose.model('Order', OrderSchema)