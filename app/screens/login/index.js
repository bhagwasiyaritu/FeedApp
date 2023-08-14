import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {commonStyle} from '../../util/commonStyles';
import {styles} from './styles';
import Button from '../../components/buttons';
import {strings} from '../../util/strings';
import Input from '../../components/inputs';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {onLoginApi} from '../../redux/slice/Login.slice';
import {useAppSelector} from '../../hooks/useAppSelector';
import {login} from '../../redux/selectors';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../util/routes';
import Header from '../../components/header';

const Login = () => {
  const dispatch = useAppDispatch();
  const naviagtion = useNavigation();
  const {loginData} = useAppSelector(login);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = () => {
    if (username.length == 0 && password.length == 0) {
      setError('Please enter valid username and password.');
      return;
    } else {
      setError('');
    }

    const data = {
      user: {
        email: username,
        password: password,
      },
    };

    dispatch(onLoginApi(data));

    if (loginData?.user) {
      naviagtion.replace(routes.home);
    }
  };

  const goBack = () => {
    naviagtion.goBack();
  };

  return (
    <>
      <Header
        headerTitle={strings.login}
        isLogin={true}
        isShowBack={true}
        onBackPress={goBack}
      />
      <View style={[commonStyle.container, styles.container]}>
        <Input
          placeholderText={strings.loginPlaceholderText}
          value={username}
          onChage={setUsername}
        />
        <Input
          placeholderText={strings.password}
          value={password}
          onChage={setPassword}
          secureTextEntry={true}
        />

        {error && <Text style={commonStyle.error}>{error}</Text>}
        <Button btnTitle={strings.submit} onPress={onSubmit} />
      </View>
    </>
  );
};

export default Login;
