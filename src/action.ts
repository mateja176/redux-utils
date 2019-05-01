/* eslint-disable indent */
import { Action as ReduxAction } from 'redux';

export type SimpleAction = ReduxAction<string>;

export type ActionCreator = () => SimpleAction;

export type CreateActionCreator = (type: string) => () => SimpleAction;
export const createActionCreator: CreateActionCreator = type => () => ({
  type,
});

export interface PayloadAction<Payload> extends SimpleAction {
  payload: Payload;
}

export type PayloadActionCreator<Payload> = (
  payload: Payload,
) => PayloadAction<Payload>;

export type CreatePayloadActionCreator = <Payload>(
  type: string,
) => (payload: Payload) => PayloadAction<Payload>;
export const createPayloadActionCreator: CreatePayloadActionCreator = type => payload => ({
  type,
  payload,
});

export type Action<Payload> = SimpleAction | PayloadAction<Payload>;

const prefixActionType = (slice: string) => (actionType: string) =>
  slice.concat(' -> ').concat(actionType);

export interface ActionTypes {
  [key: string]: string;
}

export const prefixActionTypes = (slice: string) => <A extends ActionTypes>(
  actionTypes: A,
) =>
  Object.entries(actionTypes)
    .map(([key, type]) => [key, prefixActionType(slice)(type)])
    .reduce((types, [key, type]) => ({ ...types, [key]: type }), {} as A);
