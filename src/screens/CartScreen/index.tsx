import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CartItemComponent } from '../../components/CartItemComponent';
import { CartItem } from '../../models/CartItem';
import { BottomSheetComponent } from '../../components/BottomSheetComponent';
import { ProductDetailComponent } from '../../components/ProductDetailComponent';
import { styles } from './style';
import { HeaderComponent } from '../../components/HeaderComponent';

export function CartScreen() {
  const { cartList } = useSelector((state: RootState) => state.cartList);

  const renderItem = ({ item }: {
    item: CartItem
  }) => {
    return (
      <BottomSheetComponent
        content={<ProductDetailComponent product={item} />}
        children={<View style={styles.listItem}>
          <CartItemComponent cartItem={item} />
        </View>}
      />
    );
  };

  return (
    <>
      <HeaderComponent title={'Cart List'} />
      <FlatList
        data={cartList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
      />
    </>
  );
}
