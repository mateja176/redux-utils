/* eslint-disable indent */
import { SimpleAction, PayloadAction, Action } from './action';

export interface SimpleActionReducerMap<State> {
  [actionType: string]: (state: State) => State;
}

export const createSimpleReducer = <State>(initialState: State) => (
  actionReducerMap: SimpleActionReducerMap<State>,
) => (state = initialState, { type }: SimpleAction) => {
  const actionTypes = Object.keys(actionReducerMap);

  if (actionTypes.includes(type)) {
    return actionReducerMap[type](state);
  } else {
    return state;
  }
};

export interface ActionReducerMap<State, A extends Action<A['payload']>> {
  [actionType: string]: (state: State, action: A) => State;
}

export const createReducer = <State, A extends Action<A['payload']>>(
  initialState: State,
) => (actionReducerMap: ActionReducerMap<State, A>) => (
  state = initialState,
  action: A,
) => {
  const { type } = action;

  const actionTypes = Object.keys(actionReducerMap);

  if (actionTypes.includes(type)) {
    return actionReducerMap[type](state, action);
  } else {
    return state;
  }
};

export const createSpecializedReducer = <State>(initialState: State) => (
  actionTypes: string[],
) => (state = initialState, { type, payload }: PayloadAction<State>) => {
  if (actionTypes.includes(type)) {
    return payload;
  } else {
    return state;
  }
};
