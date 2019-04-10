import { Action as ReduxAction } from "redux"

export interface Action extends ReduxAction<string> {}

export interface ActionWithPayload<Payload> extends Action {
  payload: Payload
}

export type ActionCreator = () => Action

export type CreateAction = (type: string) => ActionCreator

export const createAction: CreateAction = type => () => ({
  type,
})

export type ActionCreatorWithPayload<Payload> = (
  payload: Payload,
) => ActionWithPayload<Payload>

export type CreateActionWithPayload = <Payload>(
  type: string,
) => (payload: Payload) => ActionWithPayload<Payload>

export const createActionWithPayload: CreateActionWithPayload = type => payload => ({
  type,
  payload,
})
