const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerDetailsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    payment_term: {
        type: Number,
        required: true
    },
    service_charge_aggred: {
        type: Number,
        default: 0.0
    },
    include_VAT: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('CustomerDetail', customerDetailsSchema);