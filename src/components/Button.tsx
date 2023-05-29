import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  testID: string;
  onPress: () => void;
  title: string;
  styles?: any;
  isActive?: boolean;
}

export const Button: FC<ButtonProps> = ({onPress, title, isActive, testID}) => {
  console.log('Button', isActive);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      testID={testID}
      disabled={isActive}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
  },
  textButton: {
    color: '#000',
  },
});
