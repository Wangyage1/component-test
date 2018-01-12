'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchInput = function (_PureComponent) {
    _inherits(SearchInput, _PureComponent);

    function SearchInput(props) {
        _classCallCheck(this, SearchInput);

        var _this = _possibleConstructorReturn(this, (SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).call(this, props));

        _this.inputValue = '';

        _this.onChange = _this.onChange.bind(_this);
        _this.handleSearch = _this.handleSearch.bind(_this);
        return _this;
    }

    _createClass(SearchInput, [{
        key: 'onChange',
        value: function onChange(e) {
            var value = e.target.value ? e.target.value.trim() : '';
            this.inputValue = value;

            if (!value) {
                this.handleSearch();
            }
        }
    }, {
        key: 'handleSearch',
        value: function handleSearch() {
            var onSearch = this.props.onSearch;

            onSearch && onSearch(this.inputValue);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                defaultValue = _props.defaultValue,
                placeholder = _props.placeholder,
                _props$error = _props.error,
                error = _props$error === undefined ? false : _props$error,
                _props$style = _props.style,
                style = _props$style === undefined ? {} : _props$style;

            return _react2.default.createElement(
                'div',
                { className: 'common-search-input ' + (error ? 'error' : ''), style: style },
                _react2.default.createElement(_antd.Input, {
                    defaultValue: defaultValue,
                    onChange: this.onChange,
                    onPressEnter: this.handleSearch,
                    placeholder: placeholder
                }),
                _react2.default.createElement(_Icon2.default, { name: 'search', onClick: this.handleSearch })
            );
        }
    }]);

    return SearchInput;
}(_react.PureComponent);

exports.default = SearchInput;