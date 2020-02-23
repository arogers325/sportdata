const item = {
  "itemId": '02ccbfc7-e12d-4153-abd8-b5745buja6b5',
  name: 'Bulldog Tie',
  description: 'Impress all of your friends and associates with this Drake Bulldog Tie!',
  price: 19.99,
  sizesAvailable: ' L, M, S'
};

const firstName = 'Bill';
const lastName = 'Nye';

const customer = {
customerId: 'qohifeu8-1dds9-41c8-3f0i-53dsknj1eq3',
firstName,
lastName,
email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
phoneNumber: '+15155544455'
};

const cart = {
cartId: 'biwsdv8-1sv8-46v9-7m0q-53fbd56voe2',
customerId: 'qohifeu8-1dds9-41c8-3f0i-53dsknj1eq3',
createdDate: '2020-02-07',
purchasedDate: '2020-02-10'
};

const cartItem = {
itemId: '02ccbfc7-e12d-4153-abd8-b5745buja6b5',
cartId: 'biwsdv8-1sv8-46v9-7m0q-53fbd56voe2',
quantity: 9
};

console.log('item', item);
console.log('customer', customer);
console.log('cart', cart);
console.log('cartItem', cartItem);