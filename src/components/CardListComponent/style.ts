import { StyleSheet } from 'react-native';
import { constants } from '../../theme/constants';

export const styles = StyleSheet.create({
  listWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: constants.padding.default,
    marginHorizontal: constants.padding.default,
  },
  listContentContainerStyle: {
    marginVertical: constants.padding.default,
  },
});
