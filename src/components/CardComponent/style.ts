import { StyleSheet } from 'react-native';
import { constants } from '../../theme/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.colors.background,
    minWidth: '45%',
    height: 250,
    shadowColor: constants.colors.primary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 22,
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    paddingBottom: constants.padding.small,
  },
  title: {
    fontWeight: 'bold',
    color: constants.colors.text,
    fontSize: constants.size.font14,
  },
  price: {
    fontSize: constants.size.font12,
    marginTop: constants.padding.mini,
    color: constants.colors.textSecondary,
  },
  cardDescription: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  infoView: {
    flex: 7,
    justifyContent: 'center',
    paddingHorizontal: constants.padding.small,
  },
  iconView: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
