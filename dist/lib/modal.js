"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _react = _interopRequireDefault(require("react"));
function Modal(_ref) {
  let {
    isOpen,
    onClose,
    children
  } = _ref;
  const handleModal = e => {
    e.preventDefault();
    if (e.target === e.currentTarget) onClose();
  };
  const handleContent = e => {
    e.stopPropagation();
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    onClick: handleModal
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    onClick: handleContent
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-close"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-btn",
    "aria-label": "Close Modal",
    onClick: onClose
  }, "x")), children)));
}