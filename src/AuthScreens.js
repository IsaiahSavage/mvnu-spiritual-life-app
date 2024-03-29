import React from 'react';
import { noHeader } from './settings';
import { registerHeaderWithBackButton } from './settings';
import { Stack } from './Stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const AuthScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Login'} component={LoginScreen} options={noHeader} />
      <Stack.Screen
        name={'Register'}
        component={RegisterScreen}
        options={registerHeaderWithBackButton}
      />
    </Stack.Navigator>
  );
};

export default AuthScreens;
