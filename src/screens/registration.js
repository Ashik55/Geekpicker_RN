import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

const Registration = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Hello Registration</Text>
      <Button onPress={() => navigation.goBack()} title="Go bAck" />
    </SafeAreaView>
  );
};

export default Registration;
