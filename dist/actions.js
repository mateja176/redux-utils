"use strict";
exports.__esModule = true;
exports.createAction = function (type) { return function () { return ({
    type: type
}); }; };
exports.createActionWithPayload = function (type) { return function (payload) { return ({
    type: type,
    payload: payload
}); }; };
