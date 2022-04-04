const express = require('express');
const router = express.Router();
const invoiceController = require('../../controllers/invoiceController');

router.route('/')
    .post(invoiceController.handleNewInvoice)


module.exports = router;