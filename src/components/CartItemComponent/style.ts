import { StyleSheet } from 'react-native';
import { constants } from '../../theme/constants';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    backgroundColor: constants.colors.background,
    borderRadius: constants.borderRadius.default,
    borderWidth: 1,
    borderColor: constants.colors.borderColor,
  },
  imageContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartDescriptionContainer: {
    flex: 6,
    justifyContent: 'center',
    paddingRight: constants.padding.default,
  },
  quantityContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: constants.padding.small,
  },
  quantityControl: {
    height: 30,
  },
  image: {
    width: '80%',
    height: '80%',
    borderRadius: constants.borderRadius.default,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
    color: constants.colors.text,
    fontSize: constants.size.font14,
  },
  price: {
    fontWeight: 'bold',
    marginTop: constants.padding.small,
    color: constants.colors.text,
    fontSize: constants.size.font14,
  },
  cardDescription: {
    color: constants.colors.text,
    fontSize: constants.size.font14,
  },
});
