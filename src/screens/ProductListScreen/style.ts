import { StyleSheet } from 'react-native';
import { constants } from '../../theme/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.background,
  },
  sortButtonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: constants.padding.default,
    marginVertical: constants.padding.default,
  },
});
