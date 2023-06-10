import { _ as _objectWithoutPropertiesLoose } from './_rollupPluginBabelHelpers-2cac7098.js';
import React from 'react';
import IMaskMixin from './mixin.js';
import 'prop-types';
import 'imask/esm/imask';

const _excluded = ["inputRef"];
const IMaskInputClass = IMaskMixin(_ref => {
  let {
      inputRef
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return React.createElement('input', Object.assign({}, props, {
    ref: inputRef
  }));
});
const IMaskInputFn = (props, ref) =>
// TODO type
React.createElement(IMaskInputClass, Object.assign({}, props, {
  ref
}));
const IMaskInput = React.forwardRef(IMaskInputFn);

export { IMaskInput as default };
