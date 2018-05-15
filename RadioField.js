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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Radio = require('@material-ui/core/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _FormLabel = require('@material-ui/core/FormLabel');

var _FormLabel2 = _interopRequireDefault(_FormLabel);

var _RadioGroup = require('@material-ui/core/RadioGroup');

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _wrapField = require('./wrapField');

var _wrapField2 = _interopRequireDefault(_wrapField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio_ = function Radio_(props) {
  return (0, _wrapField2.default)(props, _react2.default.createElement(
    _FormControl2.default,
    {
      component: 'fieldset',
      disabled: props.disabled,
      error: !!props.error,
      fullWidth: props.fullWidth,
      margin: props.margin,
      required: props.required
    },
    props.label && _react2.default.createElement(
      _FormLabel2.default,
      { component: 'legend' },
      props.label
    ),
    _react2.default.createElement(
      _RadioGroup2.default,
      (0, _extends3.default)({
        'aria-label': props.name,
        name: props.name,
        onChange: function onChange(event, value) {
          return props.onChange(value);
        },
        value: '' + props.value
      }, (0, _filterDOMProps2.default)(props)),
      (props.hideFiltered && props.filter ? props.allowedValues.filter(props.filter) : props.allowedValues).map(function (item) {
        return _react2.default.createElement(_FormControlLabel2.default, {
          control: _react2.default.createElement(_Radio2.default, null),
          disabled: props.disabled || props.filter && !props.filter(item),
          key: item,
          label: props.transform ? props.transform(item) : item,
          value: '' + item
        });
      })
    ),
    props.error && props.showInlineError && _react2.default.createElement(
      _FormHelperText2.default,
      null,
      props.errorMessage
    )
  ));
};

Radio_.defaultProps = {
  fullWidth: true,
  margin: 'normal'
};

Radio_.propTypes = process.env.NODE_ENV !== "production" ? {
  filter: _propTypes2.default.func,
  hideFiltered: _propTypes2.default.bool
} : {};

exports.default = (0, _connectField2.default)(Radio_);