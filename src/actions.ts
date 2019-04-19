import { Action as ReduxAction } from 'redux';

/**
 * @example
 * const getCountType = 'count/getCount'
 * type GetCountType = typeof getCountType
 * const getCount: Action<GetCountType> = { type: getCountType }
 */
export type Action<Type extends string> = ReduxAction<Type>;

/**
 * @example
 * const setCountType = 'count/setCount'
 * const SetCountType = typeof setCountType
 * const action: ActionWithPayload<SetCountType, number> = { type: setCountType, payload: 1 }
 */
export interface ActionWithPayload<Type extends string, Payload>
  extends Action<Type> {
  payload: Payload;
}

/**
 * @example
 * const getCountType = 'count/getCount'
 * type GetCountType = typeof getCountType
 * const getCount: ActionCreator<GetCountType> = () => ({ type: getCountType })
 */
export type ActionCreator<Type extends string> = () => Action<Type>;

export type CreateActionCreator = <Type extends string>(
  type: Type,
) => ActionCreator<Type>;

/**
 * @example
 * const getCountType = 'count/getCount'
 * const getCount = createActionCreator(getCountType)
 */
export const createActionCreator: CreateActionCreator = type => () => ({
  type,
});

/**
 * @example
 * const setCountType = 'count/setCount'
 * type SetCountType = typeof setCountType
 * const setCount: ActionCreatorWithPayload<SetCountType, number> = () => ({ type: setCountType, payload: 1 })
 */
export type ActionCreatorWithPayload<Type extends string, Payload> = (
  type: Type,
) => (payload: Payload) => ActionWithPayload<Type, Payload>;

export type CreateActionCreatorWithPayload = <Type extends string, Payload>(
  type: Type,
) => (payload: Payload) => ActionWithPayload<Type, Payload>;

/**
 * @example
 * const setCountType = 'count/setCount'
 * type SetCountType = typeof setCountType
 * const setCount = createActionCreatorWithPayload<SetCountType, number>(setCountType)
 */
export const createActionCreatorWithPayload: CreateActionCreatorWithPayload = type => payload => ({
  type,
  payload,
});

/**
 * @example
 * const prefix = 'count'
 * const getCountName = 'getCount'
 * const getCountType = getActionType(prefix)(getCountName)
 */
export type CreateActionType = (
  prefix: string,
) => (actionName: string) => string;
export const createActionType: CreateActionType = prefix => actionName =>
  prefix.concat('/').concat(actionName);
