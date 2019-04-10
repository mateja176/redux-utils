"use strict";
exports.__esModule = true;
exports.createActionCreator = function (type) { return function () { return ({
    type: type
}); }; };
exports.createActionCreatorWithPayload = function (type) { return function (payload) { return ({
    type: type,
    payload: payload
}); }; };
