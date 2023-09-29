import { StyleSheet } from 'react-native';
import { constants } from '../../theme/constants';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: constants.colors.background,
      padding: constants.padding.default,
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'contain',
    },
    title: {
      fontWeight: 'bold',
      color: constants.colors.text,
      fontSize: constants.size.font24,
    },
    price: {
      fontSize: constants.size.font20,
      marginTop: constants.padding.mini,
      color: constants.colors.textSecondary,
    },
    cardDescription: {
      fontSize: constants.size.font14,
      marginTop: constants.padding.mini,
      color: constants.colors.textSecondary,
    },
  },
);
