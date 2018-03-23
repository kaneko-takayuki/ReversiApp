import {HomeActionTypes} from '../actions/homeActionCreator';

export interface homeProps {
}

const initState = {
};

// ホーム画面用Reducer
export function homeReducer(state: homeProps = initState, action){
  switch(action.type){
    case HomeActionTypes.BEGIN_CPU_FIGHT:
      return state;

    default:
      return state;
  }
}