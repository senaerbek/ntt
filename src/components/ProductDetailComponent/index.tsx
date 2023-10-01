import { Image, Text, View } from 'react-native';
import { Product } from '../../models/Product';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cart/cartSlice';
import { ButtonComponent } from '../ButtonComponent';
import { useCallback } from 'react';
import { RootState } from '../../store';
import { QuantityControlComponent } from '../QuantityControlComponent';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetailComponent(props: ProductDetailProps) {
  const { product } = props;
  const dispatch = useDispatch();
  const { cartList } = useSelector((state: RootState) => state.cartList);
  const productQuantity = cartList.find(cartItem => cartItem.id === product.id)?.quantity ?? 0;

  const addToCartPress = useCallback(() => {
    dispatch(addToCart(product));
  }, [product, dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(removeFromCart(product));
  }, [product, dispatch]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.productContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.cardDescription}>{product.description}</Text>
        <Text style={styles.shippingMethod}>{product.shippingMethod}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <View style={styles.buttonContainer}>
          {
            productQuantity > 0
              ? <View style={styles.quantityContainer}>
                <QuantityControlComponent
                  quantity={productQuantity}
                  onDecrease={onDecrease}
                  onIncrease={addToCartPress}
                />
              </View>
              :
              <View style={styles.button}>
                <ButtonComponent
                  onPress={addToCartPress}
                  text={'Add to cart'}
                />
              </View>
          }
        </View>
      </View>
    </View>
  );
}
