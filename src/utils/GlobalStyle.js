import {StyleSheet} from 'react-native';
import colors from './colors';

export default StyleSheet.create({
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

// export default globalstyle;
