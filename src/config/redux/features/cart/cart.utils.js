export const addItemToCart = (cartItems, cartItemToAdd) => {
          console.log(cartItems, cartItemToAdd)
          const existingCartItem = cartItems.find(
                    cartItem => cartItem.id === cartItemToAdd.id
          );

          if (existingCartItem) {
                    return cartItems.map(cartItem =>
                              cartItem.id === cartItemToAdd.id ?
                                        { ...cartItem, quantity: cartItem.quantity + 1 }
                                        : cartItem
                    )
          }
          console.log(cartItems, cartItemToAdd)

          return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
          const existingCartItem = cartItems.find(
                    cartItem => cartItem.id === cartItemToRemove.id
          );

          if (existingCartItem.quantity === 1) {
                    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
          }

          return cartItems.map(cartItem =>
                    cartItem.id === cartItemToRemove.id ?
                              { ...cartItem, quantity: cartItem.quantity - 1 }
                              : cartItem
          )
};

export const calTotal = (cartItems) => {
          return cartItems.reduce(
                    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price
                    , 0)
}