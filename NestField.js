'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _injectName = require('uniforms/injectName');

var _injectName2 = _interopRequireDefault(_injectName);

var _joinName = require('uniforms/joinName');

var _joinName2 = _interopRequireDefault(_joinName);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _FormLabel = require('@material-ui/core/FormLabel');

var _FormLabel2 = _interopRequireDefault(_FormLabel);

var _AutoField = require('./AutoField');

var _AutoField2 = _interopRequireDefault(_AutoField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nest = function Nest(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      fields = _ref.fields,
      fullWidth = _ref.fullWidth,
      itemProps = _ref.itemProps,
      label = _ref.label,
      margin = _ref.margin,
      name = _ref.name,
      required = _ref.required,
      showInlineError = _ref.showInlineError,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'disabled', 'error', 'errorMessage', 'fields', 'fullWidth', 'itemProps', 'label', 'margin', 'name', 'required', 'showInlineError']);
  return _react2.default.createElement(
    _FormControl2.default,
    (0, _extends3.default)({
      disabled: disabled,
      error: !!error,
      fullWidth: fullWidth,
      margin: margin,
      required: required
    }, (0, _filterDOMProps2.default)(props)),
    label && _react2.default.createElement(
      _FormLabel2.default,
      { component: 'legend' },
      label
    ),
    children ? (0, _injectName2.default)(name, children) : fields.map(function (key) {
      return _react2.default.createElement(_AutoField2.default, (0, _extends3.default)({ key: key, name: (0, _joinName2.default)(name, key) }, itemProps));
    }),
    error && showInlineError && _react2.default.createElement(
      _FormHelperText2.default,
      null,
      errorMessage
    )
  );
};

Nest.defaultProps = {
  fullWidth: true,
  margin: 'normal'
};

exports.default = (0, _connectField2.default)(Nest, { includeInChain: false });