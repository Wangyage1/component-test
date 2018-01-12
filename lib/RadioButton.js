'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _lodash = require('lodash');

require('./common.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButtonItem = _antd.Radio.Button;
var RadioGroup = _antd.Radio.Group;
//我就是来试着编辑一下玩玩

var RadioButton = function (_Component) {
	_inherits(RadioButton, _Component);

	function RadioButton() {
		_classCallCheck(this, RadioButton);

		return _possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).apply(this, arguments));
	}

	_createClass(RadioButton, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    btns = _props.btns,
			    _props$size = _props.size,
			    size = _props$size === undefined ? 'default' : _props$size,
			    activeButton = _props.activeButton,
			    handleChange = _props.handleChange;

			return _react2.default.createElement(
				RadioGroup,
				{ defaultValue: activeButton, onChange: handleChange },
				(0, _lodash.map)(btns, function (item) {
					return _react2.default.createElement(
						RadioButtonItem,
						{ key: item.key,
							styleName: 'radio-button radio-button-' + size,
							value: item.value },
						item.text
					);
				})
			);
		}
	}]);

	return RadioButton;
}(_react.Component);

exports.default = RadioButton;