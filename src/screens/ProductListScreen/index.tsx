import React from 'react';
import { View } from 'react-native';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getProducts } from '../../api/product/product-service';
import { styles } from './style';
import { CardListComponent } from '../../components/CardListComponent';
import { HeaderComponent } from '../../HeaderComponent';
import { LoadingComponent } from '../../components/LoadingComponent';
import { sortProducts } from '../../store/products/productSlice';
import { FontAwesome } from '@expo/vector-icons';
import { constants } from '../../theme/constants';

export function ProductListScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, getProducts]);

  const sortProductsPress = useCallback(() => {
    dispatch(sortProducts());
  }, [dispatch, sortProducts]);

  return (
    <>
      <HeaderComponent title='Product List' />
      <View style={styles.sortButtonContainer}>
        <FontAwesome
          onPress={sortProductsPress}
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
