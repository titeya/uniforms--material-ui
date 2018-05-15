'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _BaseField = require('uniforms/BaseField');

var _BaseField2 = _interopRequireDefault(_BaseField);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmitField = function SubmitField(_ref, _ref2) {
    var _ref2$uniforms = _ref2.uniforms,
        error = _ref2$uniforms.error,
        state = _ref2$uniforms.state;
    var disabled = _ref.disabled,
        inputRef = _ref.inputRef,
        label = _ref.label,
        value = _ref.value,
        props = (0, _objectWithoutProperties3.default)(_ref, ['disabled', 'inputRef', 'label', 'value']);
    return _react2.default.createElement(
        _Button2.default,
        (0, _extends3.default)({
            color: 'primary',
            disabled: disabled === undefined ? !!(error || state.disabled) : disabled,
            raised: 'true',
            ref: inputRef,
            type: 'submit',
            value: value
        }, (0, _filterDOMProps2.default)(props)),
        label
    );
};

SubmitField.contextTypes = _BaseField2.default.contextTypes;
SubmitField.defaultProps = { label: 'Submit' };

exports.default = SubmitField;