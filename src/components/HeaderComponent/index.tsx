import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

interface HeaderProps {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function HeaderComponent(props: HeaderProps) {
  const { title, leftIcon, rightIcon } = props;

  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, styles.left, styles.verticalCenter]}>
        {leftIcon}
      </View>
      <View style={[styles.titleContainer, styles.verticalCenter]}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
      <View style={[styles.iconContainer, styles.right, styles.verticalCenter]}>
        {rightIcon}
      </View>
    </View>
  );
}
