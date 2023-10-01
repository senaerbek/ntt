import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { FontAwesome } from '@expo/vector-icons';
import { constants } from '../../theme/constants';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../models/Product';
import { FavoriteItem } from '../../models/FavoriteItem';
import { CartItem } from '../../models/CartItem';
import { RootState } from '../../store';
import { addToFavorite, removeFromFavorite } from '../../store/favorite/favoriteSlice';
import { useCallback, useMemo, useRef, useState } from 'react';

interface CardComponentProps {
  product: Product | FavoriteItem | CartItem;
  onPress: () => void;
}

export function CardComponent(props: CardComponentProps) {
  const { product, onPress } = props;
  const dispatch = useDispatch();
  const { favoriteList } = useSelector((state: RootState) => state.favoriteList);

  const isInFavorite = useMemo(() => {
    return !!favoriteList.find(favoriteItem => favoriteItem.id === product.id);
  }, [favoriteList]);

  const onFavoritePress = useCallback(() => {
    if (isInFavorite) {
      dispatch(removeFromFavorite(product));
    } else {
      dispatch(addToFavorite(product));
    }
  }, [isInFavorite]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onFavoritePress} style={styles.iconView}>
        <FontAwesome
          color={constants.colors.background}
          name={isInFavorite ? 'heart' : 'heart-o'}
          size={constants.iconSize.small} />
      </TouchableOpacity>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.cardDescription}>
        <View style={styles.infoView}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>
    </View>
  );
}

