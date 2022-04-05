//importing the user model
const Customer = require('../models/Customer')
const bcrypt = require('bcrypt')

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
    const { name, password } = req.body;
    if (!name) return res.status(400).json({ 'message': 'Customer name is required' });
    //check for duplicate user in db
    const duplicate = await Customer.findOne({ 'name': name }).exec();
    if (duplicate) return res.sendStatus(409);//409 stands for conflict 
    try {
        //encrypt the new user
        const hashedPass = await bcrypt.hash(password, 10);

        const result = await Customer.create(
            {
                'name': name,
                'password': hashedPass
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


module.exports = { getAllCustomers, handleNewCustomer }