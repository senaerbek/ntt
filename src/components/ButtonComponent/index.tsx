import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface ButtonComponentProps {
  onPress: () => void;
  text: string;
}

export function ButtonComponent(props: ButtonComponentProps) {
  const { onPress, text } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
