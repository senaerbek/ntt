import { StyleSheet } from 'react-native';
import { constants } from '../../theme/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: constants.heights.default,
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
  quantityText: {
    fontWeight: 'bold',
    fontSize: constants.size.font16,
    color: constants.colors.textSecondary,
  },
});
