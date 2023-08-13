import {View, Text, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {routes} from '../../util/routes';
import {useNavigation} from '@react-navigation/native';
import { styles } from './styles';

const Splash = (props) => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const isUserExist = () => {
    navigation.reset({
      index: 0,
      routes: [{name: routes.home}],
    });
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    setTimeout(() => {
      isUserExist();
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}>
        <Text style={styles.text}>Splash</Text>
      </Animated.View>
    </View>
  );
};

export default Splash;
