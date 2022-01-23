import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../utils/colors';
import constants from '../utils/constants';

const TransactionItem = props => {
  const status = props.data.status.toLowerCase();

  return (
    <View style={{marginTop: 10, marginBottom: 10, flexDirection: 'row'}}>
      <Image
        source={require('../../assets/images/user.png')}
        style={{
          height: 50,
          width: 50,
          alignSelf: 'center',
        }}
      />

      <View style={{marginLeft: 10, flex: 1}}>
        <Text style={{fontSize: 18}}>{props.data.title}</Text>

        <Text style={{marginTop: 3, color: colors.descriptionColor}}>
          Type : {props.data.type}
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18}}>
          {props.data.currency_sym} {props.data.balance}
        </Text>

        <Text
          style={[
            styles.roundedBorder,
            {borderColor: status == 'approved' ? colors.green : colors.red},
          ]}>
          {props.data.status}
        </Text>
      </View>

      <View
        style={{
          height: 1,
          marginTop: 20,
          backgroundColor: colors.borderColor,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  roundedBorder: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.borderColor,
  },
});

export default TransactionItem;
