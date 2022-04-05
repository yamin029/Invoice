const express = require('express');
const router = express.Router();
const customerDetailsController = require('../../controllers/customerDetailsController')

router.route('/')
    .get(customerDetailsController.getCustomerDetails)
    .post(customerDetailsController.handleNewCustomerDetails)


module.exports = router;