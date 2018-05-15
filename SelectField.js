'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = require('@material-ui/core/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _FormLabel = require('@material-ui/core/FormLabel');

var _FormLabel2 = _interopRequireDefault(_FormLabel);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _wrapField = require('./wrapField');

var _wrapField2 = _interopRequireDefault(_wrapField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xor = function xor(item, array) {
  var index = array.indexOf(item);
  if (index === -1) {
    return array.concat([item]);
  }

  return array.slice(0, index).concat(array.slice(index + 1));
};

var renderCheckboxes = function renderCheckboxes(props) {
  return _react2.default.createElement(
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
      _FormGroup2.default,
      { id: props.id, name: props.name },
      (props.hideFiltered && props.filter ? props.allowedValues.filter(props.filter) : props.allowedValues).map(function (item) {
        return _react2.default.createElement(_FormControlLabel2.default, {
          control: _react2.default.createElement(_Checkbox2.default, (0, _extends3.default)({
            checked: props.value.includes(item),
            onChange: function onChange() {
              return props.onChange(xor(item, props.value));
            },
            value: item
          }, (0, _filterDOMProps2.default)(props))),
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
  );
};

var renderSelect = function renderSelect(props) {
  return _react2.default.createElement(
    _TextField2.default,
    (0, _extends3.default)({
      autoFocus: props.autoFocus,
      disabled: props.disabled,
      error: !!props.error,
      FormHelperTextProps: props.FormHelperTextProps,
      fullWidth: props.fullWidth,
      helperText: props.error && props.showInlineError ? props.errorMessage : props.helperText,
      InputLabelProps: { htmlFor: props.id },
      InputProps: props.InputProps,
      inputProps: (0, _extends3.default)({}, props.inputProps, { id: props.id }),
      inputRef: props.inputRef,
      label: props.label,
      margin: props.margin,
      onChange: function onChange(event) {
        return props.onChange(event.target.value);
      },
      placeholder: props.placeholder,
      select: true,
      SelectProps: {
        autoWidth: props.autoWidth,
        displayEmpty: props.displayEmpty,
        MenuProps: props.MenuProps,
        multiple: props.multiple,
        native: props.native,
        renderValue: props.renderValue
      },
      value: props.value
    }, (0, _filterDOMProps2.default)(props)),
    (props.filter ? props.allowedValues.filter(props.filter) : props.allowedValues).map(function (item) {
      return _react2.default.createElement(
        _MenuItem2.default,
        { key: item, value: item },
        props.transform ? props.transform(item) : item
      );
    })
  );
};

var Select_ = function Select_(_ref) {
  var checkboxes = _ref.checkboxes,
      props = (0, _objectWithoutProperties3.default)(_ref, ['checkboxes']);
  return (0, _wrapField2.default)(props, checkboxes ? renderCheckboxes(props) : renderSelect(props));
};

Select_.defaultProps = {
  fullWidth: true,
  margin: 'normal'
};

Select_.propTypes = {
  filter: _propTypes2.default.func,
  hideFiltered: _propTypes2.default.bool
};

exports.default = (0, _connectField2.default)(Select_);