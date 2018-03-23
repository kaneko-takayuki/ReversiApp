import {Action} from 'redux';

// Actionタイプを定義
export const HomeActionTypes = {
  BEGIN_CPU_FIGHT: Symbol('Begin CPU Fight'),
};

// タイトル用Action型
export type homeAction = BeginCpuAction;

// Actionの型定義
export interface BeginCpuAction extends Action{
  readonly type: typeof HomeActionTypes.BEGIN_CPU_FIGHT;
}

// Action生成関数
export function beginCpuFight(): BeginCpuAction{
  return {type: HomeActionTypes.BEGIN_CPU_FIGHT};
}