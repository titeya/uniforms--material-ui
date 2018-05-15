'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _BaseField = require('uniforms/BaseField');

var _BaseField2 = _interopRequireDefault(_BaseField);

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

var ErrorsField = function ErrorsField(props, _ref) {
  var _ref$uniforms = _ref.uniforms,
      error = _ref$uniforms.error,
      schema = _ref$uniforms.schema;
  return !error && !props.children ? _nothing2.default : (0, _wrapField2.default)(props, _react2.default.createElement(
    _FormControl2.default,
    (0, _extends3.default)({
      error: !!error,
      fullWidth: props.fullWidth,
      margin: props.margin
    }, (0, _filterDOMProps2.default)(props)),
    !!props.children && _react2.default.createElement(
      _FormHelperText2.default,
      null,
      props.children
    ),
    schema.getErrorMessages(error).map(function (message, index) {
      return _react2.default.createElement(
        _FormHelperText2.default,
        { key: index },
        message
      );
    })
  ));
};

ErrorsField.defaultProps = {
  fullWidth: true,
  margin: 'normal'
};

ErrorsField.contextTypes = _BaseField2.default.contextTypes;

exports.default = ErrorsField;