var uuid = require('uuid');

const cartItems = [
    {
        'cartItemId': uuid.v4(),
        'cartId': 'd72gu51f-1f7d-5d7y-6dqb-556001896ttw',
        'itemId': '485rtty2-09r8-1912-069g-262e475f55ty',
        'quantity': 3
    },
    {
        'cartItemId': uuid.v4(),
        'cartId': 'r4195wfw-7qf6-52r7-3rrx-4h25454fn2t5',
        'itemId': 't529r549-da31-4822-5829-6e5fd295f1w2',
        'quantity': 4
    }
];

const selectCartItems = () => ({
    rows: cartItems,
    error: new Error(),
    driver: 'postgres'
});

const selectCartItemsByCartItemId = (cartItemId) =>
    cartItems.find((cartItem) => cartItem['cartItemId'] === cartId);

const selectCartItemsByCartId = (cartId) => ({
    rows: cartItems.filter((cartItem) => cartItem['cartId'] === cartItemId)
});

const insertCartItem = (cartItem) => cartItems.push(cartItem);

 const updateCartItem = (updatedItem) => {
     const itemsThatDontMatch = cartItems.filter((cartItem) =>
         cartItem['cart_item_id'] !== updatedItem['cart_item_id']
     );

     cartItems = [
         ...itemsThatDontMatch, updatedItem
     ];
 };

 const deleteCartItemByCartItemId = (cartItemId) => {
     cartItems = cartItems.filter((cartItem) =>
         cartItem['cart_item_id'] !== cartItemId
     );
 };

 module.exports = {
     deleteCartItemByCartItemId,
     insertCartItem,
     selectCartItemsByCartItemId,
     selectCartItems,
     selectCartItemsByCartId,
     updateCartItem
 };