import React from 'react';
import {View} from 'react-native';
import {globalStyles} from './styles/globalStyles';

import {Button} from './components/Button';
import {useNavigation} from '@react-navigation/native';

export function HomeScreen(): JSX.Element {
  const navigation = useNavigation<any>();
  return (
    <View style={globalStyles.container}>
      <Button
        testID="button-getStarted"
        onPress={() => navigation.navigate('Login')}
        title="Get Started"
      />
    </View>
  );
}
