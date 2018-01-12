'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
    var name = _ref.name,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 'default' : _ref$size,
        _ref$onClick = _ref.onClick,
        onClick = _ref$onClick === undefined ? function () {
        return true;
    } : _ref$onClick,
        _ref$style = _ref.style,
        style = _ref$style === undefined ? {} : _ref$style;

    return _react2.default.createElement('span', {
        className: 'icon icon-' + size + ' ' + name,
        onClick: onClick,
        style: style
    });
};

exports.default = Icon;