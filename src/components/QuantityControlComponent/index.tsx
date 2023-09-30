import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './style';
import { FontAwesome } from '@expo/vector-icons';
import { constants } from '../../theme/constants';

interface QuantityControlComponentProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  style?: ViewStyle;
}

export function QuantityControlComponent(props: QuantityControlComponentProps) {
  const { quantity, onIncrease, onDecrease, style } = props;

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={onDecrease}
        style={styles.buttonContainer}>
        <FontAwesome
          color={constants.colors.black}
          name={'minus'}
          size={constants.iconSize.mini}
        />
      </TouchableOpacity>
      <View style={[styles.buttonContainer, styles.quantityContainer]}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={onIncrease}
        style={styles.buttonContainer}>
        <FontAwesome
          color={constants.colors.black}
          name={'plus'}
          size={constants.iconSize.mini}
        />
      </TouchableOpacity>
    </View>
  );
}
