import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

//service
import NavigationService from './navigationService';

//constants
import screens from './screens';
import {SCREENS} from '../constants';

export const RouteStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator initialRouteName={SCREENS.onBoarding}>
        <Stack.Screen
          name={SCREENS.onBoarding}
          component={screens.Umobile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.fliter}
          component={screens.Filter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.payment}
          component={screens.Payment}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
