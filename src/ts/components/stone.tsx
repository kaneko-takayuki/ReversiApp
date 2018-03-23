import {gameProps} from "../reducers/gameReducer";
import * as React from "react";
import {styles} from "../constants/styles";
import {Image} from "react-native";
import {DISPLAY_BOARD_PADDING} from "../constants/sizes";

interface Props {
  key: string;
  color: string;
  positionX: number;
  positionY: number;
}

export class Stone extends React.Component<Props, gameProps>{
  render(){
    // 描画する位置
    const position = {top: DISPLAY_BOARD_PADDING + this.props.positionX, left: DISPLAY_BOARD_PADDING + this.props.positionY};
    // 色による分岐
    let image_url: string;
    if(this.props.color == 'black'){
      return (
        <Image
          source={require('./../../../assets/images/black_stone.png')}
          resizeMode='contain'
          style={[styles.stone, position]}
        />
      );
    }else if(this.props.color == 'white'){
      return (
        <Image
          source={require('./../../../assets/images/white_stone.png')}
          resizeMode='contain'
          style={[styles.stone, position]}
        />
      );
    }
  }
}