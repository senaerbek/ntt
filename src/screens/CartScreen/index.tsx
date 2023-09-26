import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CardListComponent } from '../../components/CardListComponent';

export function CartScreen() {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state: RootState) => state.cartList);

  return (
    <>
      <Text>{cartList.length}</Text>
      <CardListComponent products={cartList} />
    </>
  );
}
