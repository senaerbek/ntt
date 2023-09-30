import { Image, Text, View } from 'react-native';
import { CartItem } from '../../models/CartItem';
import { styles } from './style';
import { QuantityControlComponent } from '../QuantityControlComponent';
import { useCallback } from 'react';
import { addToCart, removeFromCart } from '../../store/cart/cartSlice';
import { useDispatch } from 'react-redux';

interface CartItemComponentProps {
  cartItem: CartItem;
}

export function CartItemComponent(props: CartItemComponentProps) {
  const { cartItem } = props;
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => {
    dispatch(addToCart(cartItem));
  }, [cartItem, dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(removeFromCart(cartItem));
  }, [cartItem, dispatch]);


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: cartItem.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.cartDescriptionContainer}>
        <Text style={styles.title}>{cartItem.name}</Text>
        <Text style={styles.cardDescription} numberOfLines={1}>{cartItem.description}</Text>
        <Text style={styles.price}>${cartItem.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <QuantityControlComponent
          style={styles.quantityControl}
          quantity={cartItem.quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </View>
    </View>
  );
}
