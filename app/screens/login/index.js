import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {commonStyle} from '../../util/commonStyles';
import {styles} from './styles';
import Button from '../../components/buttons';
import {strings} from '../../util/strings';
import Input from '../../components/inputs';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[commonStyle.container, styles.container]}>
      <Text style={styles.title}>Login</Text>
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
      <Button btnTitle={strings.submit} />
    </View>
  );
};

export default Login;
