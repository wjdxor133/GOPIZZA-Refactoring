export interface MenuTypes {
  id: number;
  name: string;
  en_name: string;
  tag_text: string;
  kcal: number;
  img_url: string;
  price: number;
}

export interface MenuDataTypes {
  [key: string]: MenuTypes[];
}
