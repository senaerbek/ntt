import React from 'react';
import { View } from 'react-native';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getProducts } from '../../api/product/product-service';
import { styles } from './style';
import { CardListComponent } from '../../components/CardListComponent';
import { LoadingComponent } from '../../components/LoadingComponent';
import { sortProducts } from '../../store/products/productSlice';
import { FontAwesome } from '@expo/vector-icons';
import { constants } from '../../theme/constants';
import { HeaderComponent } from '../../components/HeaderComponent';

export function ProductListScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, getProducts]);

  const onSortProductsPress = useCallback(() => {
    dispatch(sortProducts());
  }, [dispatch, sortProducts]);

  return (
    <>
      <HeaderComponent title='Product List' />
      <View style={styles.sortButtonContainer}>
        <FontAwesome
          onPress={onSortProductsPress}
          color={constants.colors.primary}
          name={'sort-amount-asc'}
          size={constants.iconSize.small} />
      </View>
      <View style={styles.container}>
        {
          loading ?
            <LoadingComponent /> :
            <CardListComponent
              products={products}
            />
        }
      </View>
    </>
  );
}
