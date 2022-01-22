import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  GlobalStyleheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import BackArrow from '../../assets/icons/ic_arrow_left.svg';
import colors from '../utils/colors';
import PasswordTextInput from 'react-native-password-eye';
import {useDispatch, useSelector} from 'react-redux';
import GlobalStyle from '../utils/GlobalStyle';
import title from 'react-native-paper/src/components/Typography/Title';

const Login = ({navigation}) => {
  const {email, password} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPass] = useState('');

  const loginNow = navigation => {
    if (loginEmail == email && loginPassword == password) {
      console.log('matched');
      navigation.navigate('dashboard');
    } else {
      Alert.alert('Email Password wrong');
    }
  };

  return (
    <SafeAreaView style={GlobalStyle.topContainer}>
      <View style={{height: 5}} />
      <BackArrow width={'30'} height={'30'} />
      <View style={{height: 40}} />
      <Text style={GlobalStyle.welcomeText}>Welcome</Text>
      <View style={{height: 3}} />
      <Text style={GlobalStyle.loginText}>Log in to continue</Text>

      <Text style={GlobalStyle.loginText}>{email}</Text>
      <Text style={GlobalStyle.loginText}>{password}</Text>
      <View style={{height: 40}} />
      <View style={GlobalStyle.roundedBackground}>
        <TextInput
          style={GlobalStyle.textInput}
          placeholder="YOUR EMAIL"
          placeholderTextColor={colors.hintTextColor}
          onChangeText={text => setLoginEmail(text)}
        />
        <View style={{height: 1, backgroundColor: colors.borderColor}} />

        <TextInput
          style={GlobalStyle.textInput}
          placeholder="YOUR PASSWORD"
          // secureTextEntry={true}
          placeholderTextColor={colors.hintTextColor}
          onChangeText={text => setLoginPass(text)}
        />
      </View>

      <View style={{flex: 1}} />

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={GlobalStyle.smallText}>Don't have account? </Text>

        <TouchableOpacity onPress={() => navigation.navigate('registration')}>
          <Text style={[GlobalStyle.smallText, GlobalStyle.primaryBold]}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 10}} />

      <TouchableOpacity
        style={GlobalStyle.customButton}
        onPress={() => loginNow(navigation)}
        underlayColor="#fff">
        <Text style={[GlobalStyle.buttonText]}>Log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
