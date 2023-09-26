import { SafeAreaView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CardListComponent } from '../../components/CardListComponent';

export function FavoriteListScreen() {
  const { favoriteList } = useSelector((state: RootState) => state.favoriteList);

  return (
    <SafeAreaView>
      <CardListComponent products={favoriteList} />
    </SafeAreaView>
  );
}
