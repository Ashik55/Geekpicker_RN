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
import {useDispatch, useSelector} from 'react-redux';
import GlobalStyle from '../utils/GlobalStyle';
import {setEmail, setPassword} from '../redux/actions';

const Registration = ({navigation}) => {
  const {email, password} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [switchValue, setSwitchValue] = useState(false);

  const createAccount = navigation => {
    if (switchValue == false) {
      Alert.alert('Please Agree terms and condiion');
    } else {
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView style={GlobalStyle.topContainer}>
      <View style={{height: 5}} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrow width={'30'} height={'30'} />
      </TouchableOpacity>

      <View style={{height: 40}} />
      <Text style={GlobalStyle.welcomeText}>Welcome</Text>
      <View style={{height: 3}} />
      <Text style={GlobalStyle.loginText}>Sign up to continue</Text>
      <View style={{height: 40}} />
      <View style={GlobalStyle.roundedBackground}>
        <TextInput
          style={GlobalStyle.textInput}
          placeholder="YOUR EMAIL"
          placeholderTextColor={colors.hintTextColor}
          onChangeText={text => dispatch(setEmail(text))}
        />
        <View style={{height: 1, backgroundColor: colors.borderColor}} />

        <TextInput
          style={GlobalStyle.textInput}
          placeholder="YOUR PASSWORD"
          secureTextEntry={true}
          placeholderTextColor={colors.hintTextColor}
          onChangeText={text => dispatch(setPassword(text))}
        />
      </View>
      <View style={{height: 15}} />

      <View style={{flexDirection: 'row', paddingRight: 55}}>
        <Switch onValueChange={setSwitchValue} value={switchValue} />
        <View style={{width: 10}} />

        <Text style={GlobalStyle.smallText}>
          I have read, understood and agree to
          <Text
            style={[
              GlobalStyle.smallText,
              {textDecorationLine: 'underline', color: colors.primary},
            ]}>
            {' '}
            walletory's
          </Text>
          <Text
            style={[
              GlobalStyle.smallText,
              {textDecorationLine: 'underline', color: colors.primary},
            ]}>
            {' '}
            "Terms & Conditions"
          </Text>
          <Text style={[GlobalStyle.smallText]}> and </Text>
          <Text
            style={[
              GlobalStyle.smallText,
              {textDecorationLine: 'underline', color: colors.primary},
            ]}>
            {' '}
            "Privacy Policy"
          </Text>
        </Text>
      </View>

      <View style={{flex: 1}} />

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={GlobalStyle.smallText}>Already have account? </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[GlobalStyle.smallText, GlobalStyle.primaryBold]}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 10}} />

      <TouchableOpacity
        style={GlobalStyle.customButton}
        onPress={() => createAccount(navigation)}
        underlayColor="#fff">
        <Text style={[GlobalStyle.buttonText]}>Create account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Registration;
