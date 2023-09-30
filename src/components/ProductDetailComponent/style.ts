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
      resizeMode: 'stretch',
      borderRadius: constants.borderRadius.large,
    },
    title: {
      fontWeight: 'bold',
      color: constants.colors.text,
      fontSize: constants.size.font24,
    },
    price: {
      fontWeight: '900',
      color: constants.colors.text,
      fontSize: constants.size.font20,
      marginTop: constants.padding.mini,
    },
    cardDescription: {
      color: constants.colors.text,
      fontSize: constants.size.font14,
      marginTop: constants.padding.mini,
    },
    shippingMethod: {
      color: constants.colors.error,
      fontSize: constants.size.font14,
      marginTop: constants.padding.mini,
    },
    productContainer: {
      marginVertical: constants.padding.default,
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: constants.padding.default,
    },
    quantityContainer: {
      width: '50%',
    },
  },
);
