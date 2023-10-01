import { StyleSheet } from 'react-native';
import { constants } from '../../theme/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.colors.background,
  },
  title: {
    fontWeight: 'bold',
    color: constants.colors.text,
    fontSize: constants.size.font24,
  },
});
