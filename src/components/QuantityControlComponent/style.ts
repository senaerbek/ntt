import { StyleSheet } from 'react-native';
import { constants } from '../../theme/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    borderRadius: constants.borderRadius.default,
    borderWidth: 1,
    borderColor: constants.colors.borderColor,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityContainer: {
    backgroundColor: constants.colors.primary,
  },
});
