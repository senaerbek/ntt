import { Product } from './Product';

export interface FavoriteItem extends Product {
  isInFavorite: number;
}
