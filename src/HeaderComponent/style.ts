import { StyleSheet } from 'react-native';
import { constants } from '../theme/constants';

export const styles = StyleSheet.create({
  container: {
    height: constants.heights.default,
    backgroundColor: constants.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: constants.colors.borderColor,
  },
  title: {
    fontWeight: 'bold',
    color: constants.colors.primary,
    fontSize: constants.size.font20,
  },
});
