import { StyleSheet } from 'react-native';
import { constants } from '../../theme/constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: constants.heights.default,
    backgroundColor: constants.colors.primary,
    borderRadius: constants.borderRadius.default,
  },
  text: {
    fontWeight: 'bold',
    fontSize: constants.size.font16,
    color: constants.colors.textSecondary,
  },
});
