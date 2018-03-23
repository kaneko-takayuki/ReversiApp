import {StyleSheet} from 'react-native';
import {DISPLAY_BOARD_SIZE, DISPLAY_BOARD_SQUARE} from "./sizes";

export const colors ={
  buttonColor: '#2f4f4f',
  textColor: '#dddddd',
};

export const styles = StyleSheet.create({
  board: {
    height: DISPLAY_BOARD_SIZE,
    width: DISPLAY_BOARD_SIZE
  },
  stone: {
    position: 'absolute',
    height: DISPLAY_BOARD_SQUARE,
    width: DISPLAY_BOARD_SQUARE
  },
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
  },
});