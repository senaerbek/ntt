import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CartItemComponent } from '../../components/CartItemComponent';
import { constants } from '../../theme/constants';
import { CartItem } from '../../models/CartItem';
import { BottomSheetComponent } from '../../components/BottomSheetComponent';
import { ProductDetailComponent } from '../../components/ProductDetailComponent';

export function CartScreen() {
  const { cartList } = useSelector((state: RootState) => state.cartList);

  const renderItem = ({ item }: {
    item: CartItem
  }) => {
    return (
      <BottomSheetComponent
        content={<ProductDetailComponent product={item} />}
        children={<View style={{
          marginHorizontal: constants.padding.default,
          marginVertical: constants.padding.small,
        }}>
          <CartItemComponent cartItem={item} />
        </View>}
      />
    );
  };

  return (
    <FlatList
      data={cartList}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
