"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// PaymentButton.js

var PaymentButton = function PaymentButton(_ref) {
  var onClick = _ref.onClick,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick
  }, children);
};
var _default = PaymentButton;
exports["default"] = _default;