import { StyleSheet } from 'react-native';
import { constants } from '../theme/constants';

export const styles = StyleSheet.create({
	tabbar: {
		backgroundColor: constants.colors.background,
		borderTopWidth: 0,
		borderRadius: 10,
		borderColor: 'transparent',
		shadowColor: constants.colors.primary,
		shadowOffset: {
			width: 0,
			height: 11,
		},
		shadowOpacity: 0.55,
		shadowRadius: 14.78,
		elevation: 22,
	},
	container: {
		flex: 1,
		backgroundColor: constants.colors.background,
	},
});
