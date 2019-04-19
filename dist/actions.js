"use strict";
exports.__esModule = true;
/**
 * @example
 * const getCountType = 'count/getCount'
 * const getCount = createActionCreator(getCountType)
 */
exports.createActionCreator = function (type) { return function () { return ({
    type: type
}); }; };
/**
 * @example
 * const setCountType = 'count/setCount'
 * type SetCountType = typeof setCountType
 * const setCount = createActionCreatorWithPayload<SetCountType, number>(setCountType)
 */
exports.createActionCreatorWithPayload = function (type) { return function (payload) { return ({
    type: type,
    payload: payload
}); }; };
