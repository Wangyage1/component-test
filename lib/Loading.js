"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading() {
    return _react2.default.createElement(
        "div",
        { className: "center-box" },
        _react2.default.createElement(
            "div",
            { className: "sw-live-loading" },
            _react2.default.createElement("span", null),
            _react2.default.createElement("span", null),
            _react2.default.createElement("span", null),
            _react2.default.createElement("span", null),
            _react2.default.createElement("span", null)
        )
    );
};

exports.default = Loading;