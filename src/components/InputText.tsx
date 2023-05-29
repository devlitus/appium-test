import React, {FC} from 'react';
import {KeyboardTypeOptions, TextInput} from 'react-native';
interface InputTextProps {
  onChangeText: (text: string) => void;
  value: string;
  placeholder: string;
  type: KeyboardTypeOptions;
  styles?: any;
}

export const InputText: FC<InputTextProps> = ({
  onChangeText,
  value,
  placeholder,
  type = 'default',
  styles,
}) => {
  return (
    <TextInput
      testID="input-text"
      style={styles}
      keyboardType={type}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      autoCorrect={false}
      autoCapitalize="none"
    />
  );
};
