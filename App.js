import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import Routes from './app/navigation/routes';
import {SafeAreaView, StatusBar} from 'react-native';
import {commonStyle} from './app/util/commonStyles';
import { colors } from './app/util/colors';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1, backgroundColor:colors.primary}}>
        <StatusBar translucent
          backgroundColor={colors.primary}
          barStyle={'light-content'}
        />
        <Routes />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
