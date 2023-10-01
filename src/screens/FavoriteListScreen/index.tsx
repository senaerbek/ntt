import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CardListComponent } from '../../components/CardListComponent';
import { HeaderComponent } from '../../components/HeaderComponent';

export function FavoriteListScreen() {
  const { favoriteList } = useSelector((state: RootState) => state.favoriteList);

  return (
    <>
      <HeaderComponent title='Favorite List' />
      <CardListComponent products={favoriteList} />
    </>
  );
}
