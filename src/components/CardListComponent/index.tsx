import { CardComponent } from '../CardComponent';
import { styles } from './style';
import { Product } from '../../models/Product';
import { FavoriteItem } from '../../models/FavoriteItem';
import { PaginatedFlatList } from '../PaginatedFlatlistComponent';
import { BottomSheetComponent } from '../BottomSheetComponent';
import { ProductDetailComponent } from '../ProductDetailComponent';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { constants } from '../../theme/constants';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { sortProducts } from '../../store/products/productSlice';

interface CardListComponentProps {
  products: Product[] | FavoriteItem[];
}

const itemsPerPage = 10;

export function CardListComponent(props: CardListComponentProps) {
  const { products } = props;

  const renderItem = ({ item }: {
    item: Product
  }) => {
    return (
      <BottomSheetComponent
        content={
          <ProductDetailComponent
            product={item} />
        }
        children={
          <CardComponent
            product={item}
            onPress={() => {
            }}
          />
        }
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
      contentContainerStyle={styles.listContentContainerStyle}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}
