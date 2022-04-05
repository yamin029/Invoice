const express = require('express');
const router = express.Router();
const invoiceController = require('../../controllers/invoiceController');

router.route('/')
    .get(invoiceController.getInvoice)
    .post(invoiceController.handleNewInvoice)


module.exports = router;