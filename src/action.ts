import { Action } from 'redux';

export type ActionCreator<A extends Action<A['type']>> = () => A;

export type CreateActionCreator = <A extends Action<A['type']>>(
  type: A['type'],
) => () => Action<A['type']>;
export const createActionCreator: CreateActionCreator = type => () => ({
  type,
});

export type PayloadAction<Type, Payload> = Action<Type> & { payload: Payload };

export type PayloadActionCreator<
  Action extends PayloadAction<Action['type'], Action['payload']>
> = (
  payload: Action['payload'],
) => PayloadAction<Action['type'], Action['payload']>;

export type CreatePayloadActionCreator = <
  Action extends PayloadAction<Action['type'], Action['payload']>
>(
  type: Action['type'],
) => (
  payload: Action['payload'],
) => PayloadAction<Action['type'], Action['payload']>;
export const createPayloadActionCreator: CreatePayloadActionCreator = type => payload => ({
  type,
  payload,
});
