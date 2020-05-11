var uuid = require('uuid');


const customers = [
    {
        'customer-id': 'b74gt153-f95g-885t-3w1f-t7d1rt2g6m19',
        'first-name': 'Alexander',
        'last-name': 'Rogers',
        'email': 'alexander.rogers@drake.edu'
    }
];

const selectCustomers = () => ({
    rows: customers,
    error: new Error(),
    driver: 'postgres'
});

const selectCustomerByCustomerId = (customerId) =>
    customers.find((customer) => customer['customer-id'] === customerId);

module.exports = {
    selectCustomers,
    selectCustomerByCustomerId
};
