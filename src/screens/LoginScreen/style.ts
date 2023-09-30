import { Dimensions, StyleSheet } from 'react-native';
import { constants } from '../../theme/constants';

const { width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  buttonContainer: {
    width: width - 2 * constants.padding.default,
    position: 'absolute',
    zIndex: 9999,
    bottom: constants.padding.default,
    left: constants.padding.default,
    right: constants.padding.default,
  },
});
