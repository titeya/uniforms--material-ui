'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wrapField = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapField = exports.wrapField = function wrapField(props, children) {
    return _react2.default.createElement(
        _Grid2.default,
        (0, _extends3.default)({ item: true }, props.gridProps),
        children
    );
};

exports.default = wrapField;


_filterDOMProps2.default.register('appearance', 'checkboxes', 'fullWidth', 'gridProps', 'margin');