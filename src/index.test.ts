import {
  prefixActionTypes,
  createActionCreator,
  Action,
  createPayloadActionCreator,
  PayloadAction,
} from './action';
import { createCustomReducer } from './reducer';

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

export default createCustomReducer<Count, Count>(0)({
  [CountActionTypes.Increment]: count => count + 1,
  [CountActionTypes.DecrementBy]: (count, action) =>
    count - (action as PayloadAction<Count>).payload,
});
