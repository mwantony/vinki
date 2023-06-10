import { _ as _objectWithoutPropertiesLoose } from './_rollupPluginBabelHelpers-2cac7098.js';
import IMask from 'imask/esm/imask';
import { useRef, useState, useCallback, useEffect } from 'react';

const _excluded = ["value"],
  _excluded2 = ["unmaskedValue"],
  _excluded3 = ["typedValue"];
function useIMask(opts) {
  let {
    onAccept,
    onComplete
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const ref = useRef(null);
  const maskRef = useRef(null);
  const [initialized, setInitialized] = useState(false);
  const [lastAcceptState, setLastAcceptState] = useState({});
  const [value, setValue] = useState('');
  const [unmaskedValue, setUnmaskedValue] = useState('');
  const [typedValue, setTypedValue] = useState();
  const _destroyMask = useCallback(() => {
    var _maskRef$current;
    (_maskRef$current = maskRef.current) === null || _maskRef$current === void 0 ? void 0 : _maskRef$current.destroy();
    maskRef.current = null;
  }, []);
  const _onAccept = useCallback(event => {
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
  const _onComplete = useCallback(() => maskRef.current && (onComplete === null || onComplete === void 0 ? void 0 : onComplete(maskRef.current.value, maskRef.current)), [onComplete]);
  useEffect(() => {
    const el = ref.current;
    if (!el || !(opts !== null && opts !== void 0 && opts.mask)) return _destroyMask();
    const mask = maskRef.current;
    if (!mask) {
      if (el && opts !== null && opts !== void 0 && opts.mask) {
        maskRef.current = IMask(el, opts);
        _onAccept();
      }
    } else {
      mask === null || mask === void 0 ? void 0 : mask.updateOptions(opts);
    }
    setInitialized(Boolean(maskRef.current));
  }, [opts, _destroyMask, _onAccept]);
  useEffect(() => {
    if (!maskRef.current) return;
    const mask = maskRef.current;
    mask.on('accept', _onAccept);
    mask.on('complete', _onComplete);
    return () => {
      mask.off('accept', _onAccept);
      mask.off('complete', _onComplete);
    };
  }, [_onAccept, _onComplete]);
  useEffect(() => {
    const {
        value: lastAcceptValue
      } = lastAcceptState,
      state = _objectWithoutPropertiesLoose(lastAcceptState, _excluded);
    const mask = maskRef.current;
    if (mask && initialized && lastAcceptValue !== value) mask.value = value;
    setLastAcceptState(state);
  }, [value]);
  useEffect(() => {
    const {
        unmaskedValue: lastAcceptUnmaskedValue
      } = lastAcceptState,
      state = _objectWithoutPropertiesLoose(lastAcceptState, _excluded2);
    const mask = maskRef.current;
    if (mask && initialized && lastAcceptUnmaskedValue !== unmaskedValue) mask.unmaskedValue = unmaskedValue;
    setLastAcceptState(state);
  }, [unmaskedValue]);
  useEffect(() => {
    const {
        typedValue: lastAcceptTypedValue
      } = lastAcceptState,
      state = _objectWithoutPropertiesLoose(lastAcceptState, _excluded3);
    const mask = maskRef.current;
    if (mask && initialized && lastAcceptTypedValue !== typedValue) mask.typedValue = typedValue;
    setLastAcceptState(state);
  }, [typedValue]);
  useEffect(() => _destroyMask, [_destroyMask]);
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

export { useIMask as default };
