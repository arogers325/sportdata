const uuid = require('uuid');

  const {
     selectCustomers,
     selectCustomerByCustomerId
 } = require('../../Customers/customer-repository');

  describe('customer repository', () => {
     let firstCustomerId,
         secondCustomerId,
         expectedCustomerId,
         expectedFirstCustomer,
         expectedSecondCustomer;

      beforeEach(() => {
         firstCustomerId = 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28';
         secondCustomerId = '5581858f-a20e-4ada-9ccf-dd3e2cea0eb3';

          expectedFirstCustomer = {
             'customer_id': firstCustomerId,
         };
         expectedSecondCustomer = {
             'customer_id': secondCustomerId,
         };
     });

      describe('selectCustomers', () => {
         it('should return all the customers', () => {
             const actualCustomers = selectCustomers();
             const [actualFirstCustomer, actualSecondCustomer] = actualCustomers.rows;

              expect(actualFirstCustomer).toEqual(expectedFirstCustomer);
             expect(actualSecondCustomer).toEqual(expectedSecondCustomer);
         });
     });

      describe('selectCustomerByCustomerId', () => {
         it('should return a specific customer by customerId', () => {
             const actualFirstCustomer = selectCustomerByCustomerId(firstCustomerId);

              expect(actualFirstCustomer).toEqual({
                 'customer_id': expectedCustomerId
             });

              const actualSecondCustomer = selectCustomerByCustomerId(secondCustomerId);

              expect(actualSecondCustomer).toEqual({
                 'customer_id': expectedCustomerId
             });
         });
     });
 });
