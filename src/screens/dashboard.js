import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import ICLogo from '../../assets/icons/ic_logo.svg';
import ICBell from '../../assets/icons/ic_bell.svg';
import ICPay from '../../assets/icons/ic_pay.svg';
import ICRequest from '../../assets/icons/ic_request.svg';
import ICDeposite from '../../assets/icons/ic_deposite.svg';
import ICWithdraw from '../../assets/icons/ic_withdraw.svg';
import colors from '../utils/colors';
import constants from '../utils/constants';

const Dashboard = () => {
  return (
    <SafeAreaView style={[GlobalStyle.topContainer, {margin: 0}]}>
      <View
        style={[
          styles.topRow,
          {marginLeft: 15, marginRight: 15, marginTop: 10},
        ]}>
        <ICLogo width={'50'} height={'50'} />
        <View style={{flex: 1}} />

        <View style={{alignContent: 'center'}}>
          <ICBell width={'35'} height={'35'} />
        </View>

        <View style={{width: 26}} />
        <Image
          source={require('../../assets/images/profile.png')}
          style={{height: 40, width: 40}}
        />
      </View>
      <View style={{height: 30}} />
      <View style={styles.topRow}>
        <View
          style={[
            styles.roundedBackground,
            {flex: 7, flexDirection: 'row', marginLeft: 10},
          ]}>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text style={styles.whiteText}>Euro Wallet</Text>
            <View style={{height: 20}} />
            <Text
              style={[styles.whiteText, {fontWeight: 'normal', fontSize: 10}]}>
              AVAILABLE BALANCE
            </Text>
            <View style={{height: 3}} />
            <Text style={[styles.whiteText, {fontSize: 20}]}>
              {constants.EURO_SYMBOL} 2780,00
            </Text>
          </View>

          <View
            style={[
              styles.roundedBackground,
              {
                backgroundColor: colors.white,
                height: 70,
                width: 70,
                justifyContent: 'center',
                alignSelf: 'center',
              },
            ]}>
            <Image
              source={require('../../assets/images/qr.png')}
              style={{
                height: 50,
                width: 50,
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
        <View style={{width: 10}} />
        <View style={[styles.leftRoundedBorder, {flex: 4}]}>
          <Text style={styles.blackText}>USD Wallet</Text>
          <View style={{height: 20}} />
          <Text
            style={[
              styles.blackText,
              {fontWeight: 'normal', color: colors.hintTextColor, fontSize: 10},
            ]}>
            AVAILABLE BALANCE
          </Text>
          <View style={{height: 3}} />
          <Text style={[styles.blackText, {fontSize: 20}]}>
            {constants.EURO_SYMBOL} 2780,00
          </Text>
        </View>
      </View>

      <View style={{padding: 15}}>
        <View
          style={[
            styles.roundedBorder,
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          ]}>
          <View
            style={{
              flexDirection: 'column',
              flex: 1,
              alignItems: 'center',
            }}>
            <ICPay width={'30'} height={'30'} />
            <Text
              style={[
                GlobalStyle.smallText,
                {color: colors.black, marginTop: 5, fontWeight: 'normal'},
              ]}>
              Pay
            </Text>
          </View>
          <View
            style={{backgroundColor: colors.borderColor, margin: 5, width: 1}}
          />
          <View
            style={{
              flexDirection: 'column',
              flex: 1,
              alignItems: 'center',
            }}>
            <ICRequest width={'30'} height={'30'} />
            <Text
              style={[
                GlobalStyle.smallText,
                {color: colors.black, marginTop: 10, fontWeight: 'normal'},
              ]}>
              Request
            </Text>
          </View>
          <View
            style={{backgroundColor: colors.borderColor, margin: 10, width: 1}}
          />
          <View
            style={{
              flexDirection: 'column',
              flex: 1,
              alignItems: 'center',
            }}>
            <ICDeposite width={'30'} height={'30'} />
            <Text
              style={[
                GlobalStyle.smallText,
                {color: colors.black, marginTop: 10, fontWeight: 'normal'},
              ]}>
              TopUp
            </Text>
          </View>
          <View
            style={{backgroundColor: colors.borderColor, margin: 5, width: 1}}
          />
          <View
            style={{
              flexDirection: 'column',
              flex: 1,
              alignItems: 'center',
            }}>
            <ICWithdraw width={'30'} height={'30'} />
            <Text
              style={[
                GlobalStyle.smallText,
                {color: colors.black, marginTop: 10, fontWeight: 'normal'},
              ]}>
              Withdraw
            </Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View
          style={[
            styles.roundedBackground,
            {
              padding: 0,
              width: 200,
              backgroundColor: colors.tabBGColor,
              flexDirection: 'row',
            },
          ]}>
          <View
            style={[
              styles.roundedBackground,
              {
                backgroundColor: colors.white,
                flexDirection: 'row',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 4,
                paddingBottom: 4,
                margin: 5,
              },
            ]}>
            <Text>Recent</Text>
          </View>
          <Text style={{justifyContent: 'center', alignSelf: 'center'}}>
            Pending
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
  },
  roundedBackground: {
    padding: 15,
    backgroundColor: colors.walletBG,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fff',
  },
  leftRoundedBorder: {
    padding: 15,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 10,
    borderWidth: 2,
    borderColor: colors.borderColor,
  },
  roundedBorder: {
    padding: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.borderColor,
  },

  whiteText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  blackText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Dashboard;
