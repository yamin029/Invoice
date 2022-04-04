const Invoice = require('../models/Invoice')
const handleNewInvoice = async (req, res) => {
    const { invoice_number, name, panulty_interest, details, gross_total } = req.body;
    if (!name || !invoice_number) return req.status(400).json({ 'message': 'all the peramiters are required!' });
    //check for duplicate user in db
    const duplicate = await Invoice.findOne({ 'invoice_number': invoice_number }).exec();
    if (duplicate) return res.sendStatus(409);//409 stands for conflict 
    try {
        const resutl = await Invoice.create(
            {
                invoice_number: invoice_number,
                name: name,
                panulty_interest: panulty_interest,
                details: details,
                gross_total: gross_total

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

module.exports = { handleNewInvoice }