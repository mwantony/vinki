(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('imask'), require('react'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'imask', 'react', 'prop-types'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactIMask = {}, global.IMask, global.React, global.PropTypes));
})(this, (function (exports, IMask, React, PropTypes) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var IMask__default = /*#__PURE__*/_interopDefaultLegacy(IMask);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

  function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure " + obj);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }

  // TODO should be imported from core

  const MASK_PROPS = {
    // common
    mask: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].instanceOf(RegExp), PropTypes__default["default"].oneOf([Date, Number, IMask__default["default"].Masked]), PropTypes__default["default"].instanceOf(IMask__default["default"].Masked)]),
    value: PropTypes__default["default"].any,
    unmask: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].oneOf(['typed'])]),
    prepare: PropTypes__default["default"].func,
    validate: PropTypes__default["default"].func,
    commit: PropTypes__default["default"].func,
    overwrite: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].oneOf(['shift'])]),
    eager: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].oneOf(['append', 'remove'])]),
    skipInvalid: PropTypes__default["default"].bool,
    // events
    onAccept: PropTypes__default["default"].func,
    onComplete: PropTypes__default["default"].func,
    // pattern
    placeholderChar: PropTypes__default["default"].string,
    displayChar: PropTypes__default["default"].string,
    lazy: PropTypes__default["default"].bool,
    definitions: PropTypes__default["default"].object,
    blocks: PropTypes__default["default"].object,
    // date
    pattern: PropTypes__default["default"].string,
    format: PropTypes__default["default"].func,
    parse: PropTypes__default["default"].func,
    autofix: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].oneOf(['pad'])]),
    // number
    radix: PropTypes__default["default"].string,
    thousandsSeparator: PropTypes__default["default"].string,
    mapToRadix: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string),
    scale: PropTypes__default["default"].number,
    signed: PropTypes__default["default"].bool,
    normalizeZeros: PropTypes__default["default"].bool,
    padFractionalZeros: PropTypes__default["default"].bool,
    min: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].instanceOf(Date)]),
    max: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].instanceOf(Date)]),
    // dynamic
    dispatch: PropTypes__default["default"].func,
    // ref
    inputRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].shape({
      current: PropTypes__default["default"].object
    })])
  };
  const MASK_PROPS_NAMES = Object.keys(MASK_PROPS).filter(p => p !== 'value');
  const NON_MASK_OPTIONS_PROPS_NAMES = ['value', 'unmask', 'onAccept', 'onComplete', 'inputRef'];
  const MASK_OPTIONS_PROPS_NAMES = MASK_PROPS_NAMES.filter(pName => NON_MASK_OPTIONS_PROPS_NAMES.indexOf(pName) < 0);
  // TODO
  // 1. seems like it's wrong to have Opts as only mask options. Other component/input props should also be there. Where is "unmask" prop for instance?
  // 2. Unmask should be infered from Opts (see https://github.com/uNmAnNeR/imaskjs/issues/554#issuecomment-1114014010)
  function IMaskMixin(ComposedComponent) {
    const MaskedComponent = class extends React__default["default"].Component {
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
        this.maskRef = IMask__default["default"](this.element, maskOptions).on('accept', this._onAccept.bind(this)).on('complete', this._onComplete.bind(this));
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
        return React__default["default"].createElement(ComposedComponent, Object.assign({}, this._extractNonMaskProps(this.props), {
          inputRef: this._inputRef
        }));
      }
    };
    const nestedComponentName = ComposedComponent.displayName || ComposedComponent.name || 'Component';
    MaskedComponent.displayName = "IMask(".concat(nestedComponentName, ")");
    MaskedComponent.propTypes = MASK_PROPS;
    return React__default["default"].forwardRef((props, ref) => React__default["default"].createElement(MaskedComponent, Object.assign({}, props, {
      ref
    })));
  }

  const _excluded$1 = ["inputRef"];
  const IMaskInputClass = IMaskMixin(_ref => {
    let {
        inputRef
      } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
    return React__default["default"].createElement('input', Object.assign({}, props, {
      ref: inputRef
    }));
  });
  const IMaskInputFn = (props, ref) =>
  // TODO type
  React__default["default"].createElement(IMaskInputClass, Object.assign({}, props, {
    ref
  }));
  const IMaskInput = React__default["default"].forwardRef(IMaskInputFn);

  const _excluded = ["value"],
    _excluded2 = ["unmaskedValue"],
    _excluded3 = ["typedValue"];
  function useIMask(opts) {
    let {
      onAccept,
      onComplete
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const ref = React.useRef(null);
    const maskRef = React.useRef(null);
    const [initialized, setInitialized] = React.useState(false);
    const [lastAcceptState, setLastAcceptState] = React.useState({});
    const [value, setValue] = React.useState('');
    const [unmaskedValue, setUnmaskedValue] = React.useState('');
    const [typedValue, setTypedValue] = React.useState();
    const _destroyMask = React.useCallback(() => {
      var _maskRef$current;
      (_maskRef$current = maskRef.current) === null || _maskRef$current === void 0 ? void 0 : _maskRef$current.destroy();
      maskRef.current = null;
    }, []);
    const _onAccept = React.useCallback(event => {
      const m = maskRef.current;
      if (!m) return;
      setLastAcceptState({
        value: m.value,
        unmaskedValue: m.unmaskedValue,
        typedValue: m.typedValue
      });
      setTypedValue(m.typedValue);
      setUnmaskedValue(m.unmaskedValue);
      setValue(m.value);
      onAccept === null || onAccept === void 0 ? void 0 : onAccept(m.value, m, event);
    }, [onAccept]);
    const _onComplete = React.useCallback(() => maskRef.current && (onComplete === null || onComplete === void 0 ? void 0 : onComplete(maskRef.current.value, maskRef.current)), [onComplete]);
    React.useEffect(() => {
      const el = ref.current;
      if (!el || !(opts !== null && opts !== void 0 && opts.mask)) return _destroyMask();
      const mask = maskRef.current;
      if (!mask) {
        if (el && opts !== null && opts !== void 0 && opts.mask) {
          maskRef.current = IMask__default["default"](el, opts);
          _onAccept();
        }
      } else {
        mask === null || mask === void 0 ? void 0 : mask.updateOptions(opts);
      }
      setInitialized(Boolean(maskRef.current));
    }, [opts, _destroyMask, _onAccept]);
    React.useEffect(() => {
      if (!maskRef.current) return;
      const mask = maskRef.current;
      mask.on('accept', _onAccept);
      mask.on('complete', _onComplete);
      return () => {
        mask.off('accept', _onAccept);
        mask.off('complete', _onComplete);
      };
    }, [_onAccept, _onComplete]);
    React.useEffect(() => {
      const {
          value: lastAcceptValue
        } = lastAcceptState,
        state = _objectWithoutPropertiesLoose(lastAcceptState, _excluded);
      const mask = maskRef.current;
      if (mask && initialized && lastAcceptValue !== value) mask.value = value;
      setLastAcceptState(state);
    }, [value]);
    React.useEffect(() => {
      const {
          unmaskedValue: lastAcceptUnmaskedValue
        } = lastAcceptState,
        state = _objectWithoutPropertiesLoose(lastAcceptState, _excluded2);
      const mask = maskRef.current;
      if (mask && initialized && lastAcceptUnmaskedValue !== unmaskedValue) mask.unmaskedValue = unmaskedValue;
      setLastAcceptState(state);
    }, [unmaskedValue]);
    React.useEffect(() => {
      const {
          typedValue: lastAcceptTypedValue
        } = lastAcceptState,
        state = _objectWithoutPropertiesLoose(lastAcceptState, _excluded3);
      const mask = maskRef.current;
      if (mask && initialized && lastAcceptTypedValue !== typedValue) mask.typedValue = typedValue;
      setLastAcceptState(state);
    }, [typedValue]);
    React.useEffect(() => _destroyMask, [_destroyMask]);
    return {
      ref,
      maskRef,
      value,
      setValue,
      unmaskedValue,
      setUnmaskedValue,
      typedValue,
      setTypedValue
    };
  }

  Object.defineProperty(exports, 'IMask', {
    enumerable: true,
    get: function () { return IMask__default["default"]; }
  });
  exports.IMaskInput = IMaskInput;
  exports.IMaskMixin = IMaskMixin;
  exports.useIMask = useIMask;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=react-imask.js.map
