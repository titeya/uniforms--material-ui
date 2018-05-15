'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _nothing = require('uniforms/nothing');

var _nothing2 = _interopRequireDefault(_nothing);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _wrapField = require('./wrapField');

var _wrapField2 = _interopRequireDefault(_wrapField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function Error(props) {
  return !props.error ? _nothing2.default : (0, _wrapField2.default)(props, _react2.default.createElement(
    _FormControl2.default,
    { error: !!props.error },
    _react2.default.createElement(
      _FormHelperText2.default,
      (0, _filterDOMProps2.default)(props),
      props.children || props.errorMessage
    )
  ));
};

exports.default = (0, _connectField2.default)(Error, { initialValue: false });