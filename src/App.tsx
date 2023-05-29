import React from 'react';
import {View} from 'react-native';
import {globalStyles} from './styles/globalStyles';
import {RootStack} from './routers/RootStack';

export default function App(): JSX.Element {
  return (
    <View style={globalStyles.container}>
      <RootStack />
    </View>
  );
}
