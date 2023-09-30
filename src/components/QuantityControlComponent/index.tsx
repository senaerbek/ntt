import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { FontAwesome } from '@expo/vector-icons';
import { constants } from '../../theme/constants';

interface QuantityControlComponentProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityControlComponent(props: QuantityControlComponentProps) {
  const { quantity, onIncrease, onDecrease } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onIncrease}
        style={styles.buttonContainer}>
        <FontAwesome
          color={constants.colors.black}
          name={'minus'}
          size={constants.iconSize.small}
        />
      </TouchableOpacity>
      <View style={[styles.buttonContainer, styles.quantityContainer]}>
        <Text>{quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={onDecrease}
        style={styles.buttonContainer}>
        <FontAwesome
          color={constants.colors.black}
          name={'plus'}
          size={constants.iconSize.small}
        />
      </TouchableOpacity>
    </View>
  );
}
