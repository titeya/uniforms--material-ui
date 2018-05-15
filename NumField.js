'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _wrapField = require('./wrapField');

var _wrapField2 = _interopRequireDefault(_wrapField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noneIfNaN = function noneIfNaN(x) {
    return isNaN(x) ? undefined : x;
};

var Num_ = function Num_(props) {
    return (0, _wrapField2.default)(props, _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
        autoFocus: props.autoFocus,
        disabled: props.disabled,
        error: !!props.error,
        FormHelperTextProps: props.FormHelperTextProps,
        fullWidth: props.fullWidth,
        helperText: props.error && props.showInlineError ? props.errorMessage : props.helperText,
        InputProps: props.InputProps,
        inputProps: (0, _extends3.default)({}, props.inputProps, { id: props.id }),
        inputRef: props.inputRef,
        label: props.label,
        margin: props.margin,
        onChange: function onChange(event) {
            return props.onChange(event.target.value);
        },
        placeholder: props.placeholder,
        type: 'number',
        value: props.value
    }, (0, _filterDOMProps2.default)(props))));
};

// NOTE: React < 16 workaround. Make it optional?

var Num = function (_Component) {
    (0, _inherits3.default)(Num, _Component);

    function Num() {
        (0, _classCallCheck3.default)(this, Num);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Num.__proto__ || Object.getPrototypeOf(Num)).apply(this, arguments));

        _this.state = { value: '' + _this.props.value };

        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Num, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var decimal = _ref.decimal,
                value = _ref.value;

            var parse = decimal ? parseFloat : parseInt;

            if (noneIfNaN(parse(value)) !== noneIfNaN(parse(this.state.value.replace(/[.,]+$/, '')))) {
                this.setState({ value: value === undefined || value === '' ? '' : '' + value });
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(_ref2) {
            var value = _ref2.target.value;

            var change = value.replace(/[^\d.,-]/g, '');

            this.setState({ value: change });
            this.props.onChange(noneIfNaN((this.props.decimal ? parseFloat : parseInt)(change)));
        }
    }, {
        key: 'render',
        value: function render() {
            return Num_((0, _extends3.default)({}, this.props, { onChange: this.onChange, value: this.state.value }));
        }
    }]);
    return Num;
}(_react.Component);

Num.defaultProps = {
    fullWidth: true,
    margin: 'normal'
};

exports.default = (0, _connectField2.default)(Num);