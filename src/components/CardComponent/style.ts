import { StyleSheet } from 'react-native';
import { constants } from '../../theme/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.colors.background,
    minWidth: '45%',
    height: 250,
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    paddingBottom: constants.padding.small,
    borderRadius: constants.borderRadius.large,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: constants.colors.text,
    fontSize: constants.size.font14,
  },
  price: {
    textAlign: 'center',
    color: constants.colors.text,
    fontSize: constants.size.font12,
    marginTop: constants.padding.mini,
  },
  cardDescription: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoView: {
    flex: 7,
    justifyContent: 'center',
    paddingHorizontal: constants.padding.small,
  },
  iconView: {
    top: 10,
    right: 10,
    zIndex: 1,
    borderRadius: 100,
    position: 'absolute',
    padding: constants.padding.small,
    backgroundColor: constants.colors.black,
  },
});
