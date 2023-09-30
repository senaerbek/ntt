import { Text, View } from 'react-native';
import { styles } from './style';

interface HeaderProps {
  title: string;
}

export function HeaderComponent(props: HeaderProps) {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}
