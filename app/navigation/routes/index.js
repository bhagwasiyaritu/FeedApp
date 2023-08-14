import {NavigationContainer} from '@react-navigation/native';
import Stack from '../stack';

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
      <Stack />
    </NavigationContainer>
  );
}
