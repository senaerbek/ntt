import { StyleSheet } from 'react-native';
import { constants } from '../theme/constants';

export const styles = StyleSheet.create({
  container: {
    height: constants.heights.default,
    backgroundColor: constants.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: constants.colors.borderColor,
    flexDirection: 'row',
    paddingHorizontal: constants.padding.default,
  },
  title: {
    fontWeight: 'bold',
    color: constants.colors.primary,
    fontSize: constants.size.font20,
  },
  titleContainer: {
    flex: 5,
    alignItems: 'center',

  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  verticalCenter: {
    justifyContent: 'center',
  },
});
