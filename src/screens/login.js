import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import BackArrow from '../../assets/icons/ic_arrow_left.svg';
import colors from '../utils/colors';
import PasswordTextInput from 'react-native-password-eye';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.topContainer}>
      <View style={{height: 5}} />
      <BackArrow width={'30'} height={'30'} />
      <View style={{height: 40}} />
      <Text style={styles.welcomeText}>Welcome</Text>
      <View style={{height: 3}} />
      <Text style={styles.loginText}>Log in to continue</Text>
      <View style={{height: 40}} />
      <View style={styles.roundedBackground}>
        <TextInput
          style={styles.textInput}
          placeholder="YOUR EMAIL"
          placeholderTextColor={colors.hintTextColor}
          onChangeText={text => console.log(text)}
        />
        <View style={{height: 1, backgroundColor: colors.borderColor}} />

        <TextInput
          style={styles.textInput}
          placeholder="YOUR PASSWORD"
          secureTextEntry={true}
          placeholderTextColor={colors.hintTextColor}
          onChangeText={text => console.log(text)}
        />
      </View>

      <View style={{flex: 1}} />

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.smallText}>Don't have account? </Text>
        <Text style={[styles.smallText, styles.primaryBold]}>Sign up</Text>
      </View>
      <View style={{height: 10}} />

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => console.log('click')}
        underlayColor="#fff">
        <Text style={[styles.buttonText]}>Log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    margin: 20,
  },
  welcomeText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 25,
  },
  loginText: {
    color: colors.black,
    fontWeight: '300',
    fontSize: 22,
  },
  smallText: {
    color: colors.black,
    fontWeight: '300',
    fontSize: 14,
  },
  primaryBold: {
    color: colors.primary,
    fontWeight: 'bold',
  },

  roundedBackground: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.borderColor,
  },
  textInput: {
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 20,
    color: colors.black,
    fontSize: 16,
  },

  textInputPlaceholder: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    color: colors.hintTextColor,
    fontSize: 18,
  },

  customButton: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: colors.buttonBackground,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: colors.liteBlueColor,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Login;
