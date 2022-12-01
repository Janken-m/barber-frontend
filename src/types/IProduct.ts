export interface IProduct {
  _id: string;
  name: string;
  category: ICategory;
  title: string;
  img: string;
  desc: string;
  isFavorite: boolean;
  stock: number;
  cost: number;
  price: number;
}

export interface ICategory {
  id: string;
  name: string;
}
