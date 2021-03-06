export const addItemToCart = (cartItems: any, cartItemToAdd: any) => {
  const existingCartItem = cartItems.find((cartItem: any) => cartItem.name === cartItemToAdd.name);

  // 상품 수량 증가
  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.name === cartItemToAdd.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems: any, cartItemToRemove: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.name === cartItemToRemove.name,
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem: any) => cartItem.name !== cartItemToRemove.name);
  }

  // 상품 수량 감소
  return cartItems.map((cartItem: any) =>
    cartItem.name === cartItemToRemove.name
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};
