import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './style';
import { constants } from '../../theme/constants';

export function LoadingComponent() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={constants.colors.primary} />
    </View>
  );
}
