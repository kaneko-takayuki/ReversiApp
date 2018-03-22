import * as React from 'react'
import {connect} from 'react-redux'
import {Button, Text, View} from 'react-native'
import {titleProps} from "../reducers/titleReducer";
import {pressButton, titleAction} from "../actions/titleActionCreator";

interface Props {
  pressButton;
	n: number;
}

class Title extends React.Component<Props, titleProps> {
	render() {
		return (
			<View>
				<Button onPress={() => this.props.pressButton(this.props.n)} title='press me'/>
				<Text>{this.props.n}</Text>
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