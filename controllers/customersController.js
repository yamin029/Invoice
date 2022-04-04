//importing the user model
const Customer = require('../models/Customer')
const CustomersDetails = require('../models/CustomersDetails')

const getAllCustomers = (req, res) => {
    try {
        Customer.find((err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.status(200).json(data)
            }
        })
    } catch (error) {
        //server error
        res.status(500).json({ 'message': error })
    }
}

const handleNewCustomer = async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ 'message': 'Customer name is required' });
    //check for duplicate user in db
    const duplicate = await Customer.findOne({ 'name': name }).exec();
    if (duplicate) return res.sendStatus(409);//409 stands for conflict 
    try {
        const result = await Customer.create(
            {
                'name': name
            }
        )
        console.log(result);
        //201 stands for created
        res.status(201).json({ 'success': `New Customer ${name} Created` });
    } catch (error) {
        //server error
        res.status(500).json({ 'message': error })
    }
}

const getCustomerDetails = (req, res) => {
    try {
        CustomersDetails.find((err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.status(200).json(data)
            }
        })
    } catch (error) {
        //server error
        res.status(500).json({ 'message': error })
    }
}

const handleNewCustomerDetails = async (req, res) => {
    const { name, address, email, payment_term, service_charge_aggred, include_VAT } = req.body;
    if (!name || !address || !email || !payment_term || !service_charge_aggred || !include_VAT) return req.status(400).json({ 'message': 'all the peramiters are required!' });
    //check for duplicate user in db
    const duplicate = await CustomersDetails.findOne({ 'name': name }).exec();
    if (duplicate) return res.sendStatus(409);//409 stands for conflict 
    try {
        const resutl = await CustomersDetails.create(
            {
                name: name,
                address: address,
                email: email,
                payment_term: payment_term,
                service_charge_aggred: service_charge_aggred,
                include_VAT: include_VAT,
            }
        )
        //console.log(result);
        //201 stands for created
        res.status(201).json({ 'success': `New Customer Details ${name} Created` });

    } catch (error) {
        //server error
        console.log(error.message)
    }
}

module.exports = { getAllCustomers, handleNewCustomer, getCustomerDetails, handleNewCustomerDetails }