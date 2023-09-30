import { StyleSheet } from 'react-native';
import { constants } from '../../theme/constants';

export const styles = StyleSheet.create({
  listView: {
    position: 'absolute',
    marginTop: constants.heights.default,
    backgroundColor: 'transparent',
  },
  inputContainer: {
    height: constants.heights.default,
    width: '100%',
  },
});
