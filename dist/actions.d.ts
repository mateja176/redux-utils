import { Action as ReduxAction } from "redux";
export interface Action extends ReduxAction<string> {
}
export interface ActionWithPayload<Payload> extends Action {
    payload: Payload;
}
export declare type ActionCreator = () => Action;
export declare type CreateAction = (type: string) => ActionCreator;
export declare const createAction: CreateAction;
export declare type ActionCreatorWithPayload<Payload> = (payload: Payload) => ActionWithPayload<Payload>;
export declare type CreateActionWithPayload = <Payload>(type: string) => (payload: Payload) => ActionWithPayload<Payload>;
export declare const createActionWithPayload: CreateActionWithPayload;
