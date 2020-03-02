const uuid = require('uuid');

  let items = [
     {
         'itemId': uuid.v4(),
         'name': 'Drake Cooler.',
         'description': 'A Cooler with a Billdog logo for all of your partying needs!.'
         'price': 22.99
     },
     {
         'itemId': uuid.v4(),
         'name': 'Drake MacBook.',
         'description': 'A MacBook with Drake Logo engraved on the top.'
         'price': 799.99
     }
 ];

  const selectItems = () => ({
     rows: items,
     error: new Error(),
     driver: 'postgres'
 });

  const selectItemByItemId = (itemId) =>
     items.find((item) => item['itemId'] === itemId);

  module.exports = {
     selectItems,
     selectItemByItemId
 };
