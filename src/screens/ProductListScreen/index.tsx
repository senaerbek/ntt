import { Text, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getProducts } from '../../api/product/product-service';

export function ProductListScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Text>{products.length}</Text>
      {products.map((a) => (
        <TouchableOpacity>
          <Text>{a.name}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
}
