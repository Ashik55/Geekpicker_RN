import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackArrow from '../../assets/icons/ic_arrow_left.svg';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.topContainer}>
      <BackArrow width={'30'} height={'30'} />
      <View style={{height: 100}} />

      <Text> hello Login</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    margin: 20,
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
