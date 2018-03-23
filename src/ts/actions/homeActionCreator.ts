import {Action} from 'redux';
import {Actions} from "react-native-router-flux";

// Actionタイプを定義
export const HomeActionTypes = {
  BEGIN_CPU_FIGHT: Symbol('Begin CPU Fight'),
};

// ホーム用Action型
export type homeAction = BeginCpuAction;

// Actionの型定義
export interface BeginCpuAction extends Action{
  readonly type: typeof HomeActionTypes.BEGIN_CPU_FIGHT;
}

// Action生成関数
export function beginCpuFight(): BeginCpuAction{
  Actions.game();
  return {type: HomeActionTypes.BEGIN_CPU_FIGHT};
}