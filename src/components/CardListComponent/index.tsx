import { CardComponent } from '../CardComponent';
import { styles } from './style';
import { FlatList } from 'react-native';
import { Product } from '../../models/Product';
import { FavoriteItem } from '../../models/FavoriteItem';
import { PaginatedFlatList } from '../PaginatedFlatlistComponent';

interface CardListComponentProps {
  products: Product[] | FavoriteItem[];
}

const itemsPerPage = 10;

export function CardListComponent(props: CardListComponentProps) {
  const { products } = props;

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <CardComponent
        product={item}
        onPress={() => {
        }}
      />
    );
  };

  return (
    <PaginatedFlatList
      itemsPerPage={itemsPerPage}
      data={products}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={styles.listWrapperStyle}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}
