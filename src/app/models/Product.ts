export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  likes?: number;
  isLiked: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Phone XL',
    price: 799,
    quantity: 2,
    likes: 30,
    isLiked: false,
  },
  {
    id: 2,
    title: 'Phone Mini',
    price: 699,
    quantity: 5,
    likes: 20,
    isLiked: false,
  },
  {
    id: 3,
    title: 'Phone Standard',
    price: 299,
    quantity: 7,
    likes: 10,
    isLiked: false,
  },
];
