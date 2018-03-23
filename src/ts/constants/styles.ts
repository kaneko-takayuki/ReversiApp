import {StyleSheet} from 'react-native';

export const colors ={
  buttonColor: '#2f4f4f',
  textColor: '#dddddd',
};

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonColor,
    borderRadius: 5,
    padding: 5,
    margin: 5,
    height: 30,
    alignItems: 'center',
  },
  text: {
    color: colors.textColor
  }
});