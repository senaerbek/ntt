import { CardComponent } from '../CardComponent';
import { styles } from './style';
import { FlatList } from 'react-native';
import { Product } from '../../models/Product';
import { FavoriteItem } from '../../models/FavoriteItem';

interface CardListComponentProps {
  products: Product[] | FavoriteItem[];
}

export function CardListComponent(props: CardListComponentProps) {
  const { products } = props;

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <CardComponent
          product={item}
          onPress={() => {
          }}
        />
      )}
      numColumns={2}
      columnWrapperStyle={styles.listWrapperStyle}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}
