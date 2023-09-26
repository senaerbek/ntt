import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

export function CartScreen() {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state: RootState) => state.cartList);

  return (
    <>
      <Text>{cartList.length}</Text>
    </>
  );
}
