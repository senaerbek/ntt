import { Dimensions, StyleSheet } from 'react-native';
import { constants } from '../../theme/constants';

const { width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: constants.colors.background,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: constants.colors.text,
    fontSize: constants.size.font24,
  },
  mapButtonContainer: {
    marginHorizontal: constants.padding.default,
    marginTop: constants.padding.default,
  },
});
