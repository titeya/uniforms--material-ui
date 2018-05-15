'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var LongText = function LongText(props) {
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
        multiline: true,
        onChange: function onChange(event) {
            return props.onChange(event.target.value);
        },
        placeholder: props.placeholder,
        value: props.value
    }, (0, _filterDOMProps2.default)(props))));
};

LongText.defaultProps = {
    fullWidth: true,
    margin: 'normal'
};

exports.default = (0, _connectField2.default)(LongText);