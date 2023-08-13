import {NavigationContainer} from '@react-navigation/native';
import Stack from '../stack';
import {StatusBar} from 'react-native';
import {colors} from '../../util/colors';

export default function Routes() {
  return (
    <NavigationContainer
      independent={true}
      theme={{
        dark: false,
        colors: {
          primary: 'white',
        },
      }}>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <Stack />
    </NavigationContainer>
  );
}
