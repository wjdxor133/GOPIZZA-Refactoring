export interface CartItemType {
  id: string;
  name: string;
  en_name: string;
  tag_text: string;
  img_url: string;
  price: number;
  quantity: number;
}

export interface CartTypes {
  hidden: boolean;
  cartItems: CartItemType[];
}
