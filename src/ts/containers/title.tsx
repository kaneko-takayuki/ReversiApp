import * as React from 'react';
import {connect} from 'react-redux';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {Audio} from 'expo';

import {titleProps} from '../reducers/titleReducer';
import {pressButton} from '../actions/titleActionCreator';
import {styles} from '../constants/styles';

interface Props {
  pressButton;
	n: number;
}

class Title extends React.Component<Props, titleProps> {
  playSound = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./../../../assets/sounds/beat.mp3'));
      await soundObject.playAsync();
    } catch (error) {
      console.log('error!');
    }
  };

	render() {
		return (
			<View>
        <Button onPress={() => this.playSound()} title='Play_Sound!'/>
        <TouchableOpacity onPress={() => this.props.pressButton(this.props.n)} style={styles.button}>
          <Text style={styles.text}>To Home!</Text>
        </TouchableOpacity>
			</View>
		);
	}
}

// セレクター
function selector(state: any){
	return state.titleReducer;
}

// ディスパッチャー
function dispatcher(dispatch){
  return {
    pressButton: (n: number) => {dispatch(pressButton(n))}
  }
}

export default connect(selector, dispatcher)(Title);