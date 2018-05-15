'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _Card = require('@material-ui/core/Card');

var _Card2 = _interopRequireDefault(_Card);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _joinName = require('uniforms/joinName');

var _joinName2 = _interopRequireDefault(_joinName);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('@material-ui/core/List');

var _AutoField = require('./AutoField');

var _AutoField2 = _interopRequireDefault(_AutoField);

var _ListDelField = require('./ListDelField');

var _ListDelField2 = _interopRequireDefault(_ListDelField);

var _wrapField = require('./wrapField');

var _wrapField2 = _interopRequireDefault(_wrapField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem_ = function ListItem_(props) {
    return _react2.default.createElement(
        _List.ListItem,
        null,
        (0, _wrapField2.default)((0, _extends3.default)({ gridProps: { xs: 12 } }, props), _react2.default.createElement(
            _Card2.default,
            null,
            _react2.default.createElement(
                _Card.CardContent,
                null,
                props.children ? _react.Children.map(props.children, function (child) {
                    return _react2.default.cloneElement(child, {
                        name: (0, _joinName2.default)(props.name, child.props.name),
                        label: null
                    });
                }) : _react2.default.createElement(_AutoField2.default, props)
            ),
            _react2.default.createElement(
                _Card.CardActions,
                null,
                _react2.default.createElement(_ListDelField2.default, { name: props.name, icon: props.delIcon })
            )
        ))
    );
};

exports.default = (0, _connectField2.default)(ListItem_, { includeInChain: false, includeParent: true });