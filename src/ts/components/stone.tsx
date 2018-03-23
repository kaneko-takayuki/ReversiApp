import {gameProps} from "../reducers/gameReducer";
import * as React from "react";
import {styles} from "../constants/styles";
import {Image} from "react-native";
import {DISPLAY_BOARD_PADDING} from "../constants/sizes";

interface Props {
  key: string;
  positionX: number;
  positionY: number;
}

export class Stone extends React.Component<Props, gameProps>{
  render(){
    const position = {top: DISPLAY_BOARD_PADDING + this.props.positionX, left: DISPLAY_BOARD_PADDING + this.props.positionY};
    return (
      <Image
        source={require('./../../../assets/images/black_stone.png')}
        resizeMode='contain'
        style={[styles.stone, position]}
      />
    );
  }
}