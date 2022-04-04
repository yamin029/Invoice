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
    }
})

module.exports = mongoose.model('Invoice', invoiceNumberSchema);