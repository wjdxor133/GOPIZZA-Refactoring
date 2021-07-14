export interface CartItemType {
  id: number;
  name: string;
  en_name: string;
  tag_text: string;
  img_url: string;
  price: number;
}

export interface CartTypes {
  hidden: boolean;
  cartItems: CartItemType[];
}
