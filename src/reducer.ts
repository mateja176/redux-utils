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

export interface ActionReducerMap<State, Payload> {
  [actionType: string]: (state: State, action: Action<Payload>) => State;
}

export const createCustomReducer = <State, Payload>(initialState: State) => (
  actionReducerMap: ActionReducerMap<State, Payload>,
) => (state = initialState, action: Action<Payload>) => {
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
