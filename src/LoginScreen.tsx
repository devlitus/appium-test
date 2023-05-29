import React from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from './styles/globalStyles';
import {InputText} from './components/InputText';
import {useNavigation} from '@react-navigation/native';
import {Button} from './components/Button';

export function LoginScreen(): JSX.Element {
  const navigation = useNavigation<any>();
  const [valueEmial, setInputEmail] = React.useState('');
  const [valuePassword, setInputPassword] = React.useState('');
  const [isValidate] = React.useState(false);

  const handleSubmit = () => {
    console.log(valueEmial, valuePassword);
    navigation.navigate('Home');
  };
  return (
    <View style={globalStyles.container}>
      <InputText
        placeholder="Email"
        onChangeText={value => setInputEmail(value)}
        type="email-address"
        value={valueEmial}
        styles={inputStyles.input}
      />
      <InputText
        placeholder="password"
        onChangeText={value => setInputPassword(value)}
        type="visible-password"
        value={valuePassword}
        styles={inputStyles.input}
      />
      <Button
        testID="button-submit"
        onPress={handleSubmit}
        title="Press me"
        isActive={isValidate}
      />
    </View>
  );
}

const inputStyles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
