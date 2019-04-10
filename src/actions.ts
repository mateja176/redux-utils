import { Action as ReduxAction } from "redux"

export interface Action extends ReduxAction<string> {}

export interface ActionWithPayload<Payload> extends Action {
  payload: Payload
}

export type ActionCreator = () => Action

export type CreateActionCreator = (type: string) => ActionCreator

export const createActionCreator: CreateActionCreator = type => () => ({
  type,
})

export type ActionCreatorWithPayload<Payload> = (
  payload: Payload,
) => ActionWithPayload<Payload>

export type CreateActionCreatorWithPayload = <Payload>(
  type: string,
) => (payload: Payload) => ActionWithPayload<Payload>

export const createActionCreatorWithPayload: CreateActionCreatorWithPayload = type => payload => ({
  type,
  payload,
})
