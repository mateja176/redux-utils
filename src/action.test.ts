import { Action } from 'redux';
import {
  ActionCreator,
  createActionCreator,
  createPayloadActionCreator,
  PayloadAction,
  PayloadActionCreator,
} from './action';

export type Count = number;

export const initialCount = 0;

export const incrementActionType = '[Count] Increment';

export type IncrementAction = Action<typeof incrementActionType>;

export type IncrementActionCreator = ActionCreator<IncrementAction>;

export const increment: IncrementActionCreator = createActionCreator<
  IncrementAction
>(incrementActionType);

export const decrementByActionType = '[Count] Decrement';

export type DecrementByAction = PayloadAction<
  typeof decrementByActionType,
  Count
>;

export type DecrementByActionCreator = PayloadActionCreator<DecrementByAction>;

export const decrementBy: DecrementByActionCreator = createPayloadActionCreator<
  DecrementByAction
>(decrementByActionType);

export type CountAction = IncrementAction | DecrementByAction;

export default (count = initialCount, action: CountAction) => {
  switch (action.type) {
    case incrementActionType:
      return count + 1;
    case decrementByActionType:
      return count - action.payload;
    default:
      return count;
  }
};
