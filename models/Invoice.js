const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceNumberSchema = new Schema({
    invoice_number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    invoice_date: {
        type: Date,
        default: Date.now,
    },
    due_date: {
        type: Date,
        default: Date.now
    },
    panulty_interest: {
        type: Number,
        default: 8.0
    },
    details: {
        type: Array,
        default: []
    },
    gross_total: {
        type: Number,
        default: 0.0
    }

})

module.exports = mongoose.model('Invoice', invoiceNumberSchema);