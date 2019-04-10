import { Action as ReduxAction } from "redux";
export interface Action extends ReduxAction<string> {
}
export interface ActionWithPayload<Payload> extends Action {
    payload: Payload;
}
export declare type ActionCreator = () => Action;
export declare type CreateActionCreator = (type: string) => ActionCreator;
export declare const createActionCreator: CreateActionCreator;
export declare type ActionCreatorWithPayload<Payload> = (payload: Payload) => ActionWithPayload<Payload>;
export declare type CreateActionCreatorWithPayload = <Payload>(type: string) => (payload: Payload) => ActionWithPayload<Payload>;
export declare const createActionCreatorWithPayload: CreateActionCreatorWithPayload;
