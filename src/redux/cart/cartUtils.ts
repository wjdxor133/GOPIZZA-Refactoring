export const addItemToCart = (cartItems: any, cartItemToAdd: any) => {
  console.log("cartItems", cartItems);
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === cartItemToAdd.id
  );

  // 상품 수량 증가
  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return { ...cartItems, ...cartItemToAdd, quantity: 1 };
};

export const removeItemFromCart = (cartItems: any, cartItemToRemove: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem: any) => cartItem.id !== cartItemToRemove.id
    );
  }

  // 상품 수량 감소
  return cartItems.map((cartItem: any) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
