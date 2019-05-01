import {
  prefixActionTypes,
  createActionCreator,
  Action,
  createPayloadActionCreator,
} from './action';
import { createReducer } from './reducer';

export type Count = number;

export const CountActionTypes = prefixActionTypes('Count')({
  Increment: 'Increment',
  DecrementBy: 'Decrement By',
});

export const increment = createActionCreator(CountActionTypes.Increment);

export const decrementBy = createPayloadActionCreator<Count>(
  CountActionTypes.DecrementBy,
);

export type CountAction = Action<Count>;

export default createReducer<Count, CountAction>(0)({
  [CountActionTypes.Increment]: count => count + 1,
  [CountActionTypes.DecrementBy]: (count, { payload: amount }) =>
    count + amount,
});
