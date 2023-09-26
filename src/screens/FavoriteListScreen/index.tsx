import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

export function FavoriteListScreen() {
  const dispatch = useDispatch();
  const { favoriteList } = useSelector((state: RootState) => state.favoriteList);

  return (
    <>
      <Text>{favoriteList.length}</Text>
    </>
  );
}
