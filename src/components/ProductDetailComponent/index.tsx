import { Button, Image, Text, View } from 'react-native';
import { Product } from '../../models/Product';
import { styles } from './style';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart/cartSlice';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetailComponent(props: ProductDetailProps) {
  const { product } = props;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.cardDescription}>{product.description}</Text>
      <Button title={'Add to cart'} onPress={() => {
        dispatch(addToCart(product));
      }} />

    </View>
  );
}
