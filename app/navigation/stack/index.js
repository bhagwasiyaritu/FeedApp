import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../../util/routes';
import Splash from '../../screens/splash';
import Home from '../../screens/home';

const StackNavigator = createNativeStackNavigator();

const Stack = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName={routes.splash}
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigator.Screen name={routes.splash} component={Splash} />
      <StackNavigator.Screen name={routes.home} component={Home} />
    </StackNavigator.Navigator>
  );
};

export default Stack;
