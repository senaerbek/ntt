import { Text, View } from 'react-native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getProducts } from '../../api/product/product-service';
import { styles } from './style';
import { CardListComponent } from '../../components/CardListComponent';
import { HeaderComponent } from '../../HeaderComponent';

export function ProductListScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <HeaderComponent title='Product List' />
      <View style={styles.container}>
        {
          loading ? <Text>Loading...</Text> : <CardListComponent products={products} />
        }
      </View>
    </>
  );
}
