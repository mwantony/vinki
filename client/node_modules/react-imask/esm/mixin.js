import { a as _objectDestructuringEmpty } from './_rollupPluginBabelHelpers-2cac7098.js';
import React from 'react';
import PropTypes from 'prop-types';
import IMask from 'imask/esm/imask';

// TODO should be imported from core

const MASK_PROPS = {
  // common
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.string, PropTypes.instanceOf(RegExp), PropTypes.oneOf([Date, Number, IMask.Masked]), PropTypes.instanceOf(IMask.Masked)]),
  value: PropTypes.any,
  unmask: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['typed'])]),
  prepare: PropTypes.func,
  validate: PropTypes.func,
  commit: PropTypes.func,
  overwrite: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['shift'])]),
  eager: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['append', 'remove'])]),
  skipInvalid: PropTypes.bool,
  // events
  onAccept: PropTypes.func,
  onComplete: PropTypes.func,
  // pattern
  placeholderChar: PropTypes.string,
  displayChar: PropTypes.string,
  lazy: PropTypes.bool,
  definitions: PropTypes.object,
  blocks: PropTypes.object,
  // date
  pattern: PropTypes.string,
  format: PropTypes.func,
  parse: PropTypes.func,
  autofix: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['pad'])]),
  // number
  radix: PropTypes.string,
  thousandsSeparator: PropTypes.string,
  mapToRadix: PropTypes.arrayOf(PropTypes.string),
  scale: PropTypes.number,
  signed: PropTypes.bool,
  normalizeZeros: PropTypes.bool,
  padFractionalZeros: PropTypes.bool,
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]),
  // dynamic
  dispatch: PropTypes.func,
  // ref
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.object
  })])
};
const MASK_PROPS_NAMES = Object.keys(MASK_PROPS).filter(p => p !== 'value');
const NON_MASK_OPTIONS_PROPS_NAMES = ['value', 'unmask', 'onAccept', 'onComplete', 'inputRef'];
const MASK_OPTIONS_PROPS_NAMES = MASK_PROPS_NAMES.filter(pName => NON_MASK_OPTIONS_PROPS_NAMES.indexOf(pName) < 0);
// TODO
// 1. seems like it's wrong to have Opts as only mask options. Other component/input props should also be there. Where is "unmask" prop for instance?
// 2. Unmask should be infered from Opts (see https://github.com/uNmAnNeR/imaskjs/issues/554#issuecomment-1114014010)
function IMaskMixin(ComposedComponent) {
  const MaskedComponent = class extends React.Component {
    constructor(props) {
      super(props);
      this._inputRef = this._inputRef.bind(this);
    }
    componentDidMount() {
      if (!this.props.mask) return;
      this.initMask();
    }
    componentDidUpdate() {
      const props = this.props;
      const maskOptions = this._extractMaskOptionsFromProps(props);
      if (maskOptions.mask) {
        if (this.maskRef) {
          this.maskRef.updateOptions(maskOptions);
          if ('value' in props) this.maskValue = props.value;
        } else {
          this.initMask(maskOptions);
        }
      } else {
        this.destroyMask();
        if ('value' in props) this.element.value = props.value;
      }
    }
    componentWillUnmount() {
      this.destroyMask();
    }
    _inputRef(el) {
      this.element = el;
      if (this.props.inputRef) {
        if (Object.prototype.hasOwnProperty.call(this.props.inputRef, 'current')) this.props.inputRef.current = el;else this.props.inputRef(el);
      }
    }
    initMask() {
      let maskOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._extractMaskOptionsFromProps(this.props);
      this.maskRef = IMask(this.element, maskOptions).on('accept', this._onAccept.bind(this)).on('complete', this._onComplete.bind(this));
      if ('value' in this.props) this.maskValue = this.props.value;
    }
    destroyMask() {
      if (this.maskRef) {
        this.maskRef.destroy();
        delete this.maskRef;
      }
    }
    _extractMaskOptionsFromProps(props) {
      const cloneProps = Object.assign({}, (_objectDestructuringEmpty(props), props));

      // keep only mask options props
      Object.keys(cloneProps)
      // TODO why need cast to string?
      .filter(prop => MASK_OPTIONS_PROPS_NAMES.indexOf(prop) < 0).forEach(nonMaskProp => {
        delete cloneProps[nonMaskProp];
      });

      // TODO type actually should be IMask.DeduceMasked<Opts>
      return cloneProps;
    }
    _extractNonMaskProps(props) {
      const _ref = props,
        cloneProps = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
      MASK_PROPS_NAMES.forEach(maskProp => {
        delete cloneProps[maskProp];
      });
      if (!('defaultValue' in cloneProps)) cloneProps.defaultValue = props.mask ? '' : cloneProps.value;
      delete cloneProps.value;
      return cloneProps;
    }
    get maskValue() {
      if (this.props.unmask === 'typed') return this.maskRef.typedValue;
      if (this.props.unmask) return this.maskRef.unmaskedValue;
      return this.maskRef.value;
    }
    set maskValue(value) {
      value = value == null && this.props.unmask !== 'typed' ? '' : value;
      if (this.props.unmask === 'typed') this.maskRef.typedValue = value;else if (this.props.unmask) this.maskRef.unmaskedValue = value;else this.maskRef.value = value;
    }
    _onAccept(e) {
      if (this.props.onAccept && this.maskRef) this.props.onAccept(this.maskValue, this.maskRef, e);
    }
    _onComplete(e) {
      if (this.props.onComplete && this.maskRef) this.props.onComplete(this.maskValue, this.maskRef, e);
    }
    render() {
      return React.createElement(ComposedComponent, Object.assign({}, this._extractNonMaskProps(this.props), {
        inputRef: this._inputRef
      }));
    }
  };
  const nestedComponentName = ComposedComponent.displayName || ComposedComponent.name || 'Component';
  MaskedComponent.displayName = "IMask(".concat(nestedComponentName, ")");
  MaskedComponent.propTypes = MASK_PROPS;
  return React.forwardRef((props, ref) => React.createElement(MaskedComponent, Object.assign({}, props, {
    ref
  })));
}

export { IMaskMixin as default };
