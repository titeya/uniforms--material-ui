'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Switch = require('@material-ui/core/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _wrapField = require('./wrapField');

var _wrapField2 = _interopRequireDefault(_wrapField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bool = function Bool(props) {
  return (0, _wrapField2.default)(props, _react2.default.createElement(
    _FormControl2.default,
    {
      disabled: props.disabled,
      error: !!props.error,
      fullWidth: props.fullWidth,
      margin: props.margin,
      required: props.required
    },
    _react2.default.createElement(_FormControlLabel2.default, {
      checked: !!props.value,
      control: props.appearance === 'toggle' ? _react2.default.createElement(_Switch2.default, (0, _extends3.default)({
        disableRipple: props.disableRipple,
        inputProps: (0, _extends3.default)({}, props.inputProps, { id: props.id }),
        inputRef: props.inputRef,
        name: props.name
      }, (0, _filterDOMProps2.default)(props))) : _react2.default.createElement(_Checkbox2.default, (0, _extends3.default)({
        disableRipple: props.disableRipple,
        indeterminate: props.indeterminate,
        indeterminateIcon: props.indeterminateIcon,
        inputProps: (0, _extends3.default)({}, props.inputProps, { id: props.id }),
        inputRef: props.inputRef,
        name: props.name
      }, (0, _filterDOMProps2.default)(props))),
      onChange: function onChange(event, value) {
        return props.disabled || props.onChange(value);
      },
      disabled: props.disabled,
      label: props.label
    }),
    props.error && props.showInlineError && _react2.default.createElement(
      _FormHelperText2.default,
      null,
      props.errorMessage
    )
  ));
};

Bool.defaultProps = {
  appearance: 'checkbox',
  fullWidth: true,
  margin: 'normal'
};

Bool.propTypes = process.env.NODE_ENV !== "production" ? {
  appearance: _propTypes2.default.oneOf(['toggle', 'checkbox'])
} : {};

exports.default = (0, _connectField2.default)(Bool);