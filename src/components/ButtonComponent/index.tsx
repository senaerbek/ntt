import React from 'react';
import { Text } from 'react-native';
import { styles } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ButtonComponentProps {
  onPress?: () => void;
  text: string;
}

export function ButtonComponent(props: ButtonComponentProps) {
  const { onPress, text } = props;

  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress !== undefined) {
          onPress();
        }
      }}
      style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
