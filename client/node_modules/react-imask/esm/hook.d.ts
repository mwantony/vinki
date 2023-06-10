import IMask from 'imask';
import { Dispatch } from 'react';
import type { MutableRefObject } from 'react';
import type { ReactMaskProps, ReactElement } from './mixin';
export default function useIMask<Opts extends IMask.AnyMaskedOptions = IMask.AnyMaskedOptions, MaskElement extends ReactElement = HTMLInputElement>(opts: Opts, { onAccept, onComplete }?: Partial<Pick<ReactMaskProps<Opts, true, IMask.InputMask<Opts>['value'], MaskElement>, 'onAccept' | 'onComplete'>>): {
    ref: MutableRefObject<MaskElement>;
    maskRef: MutableRefObject<IMask.InputMask<Opts>>;
    value: IMask.InputMask<Opts>['value'];
    setValue: Dispatch<IMask.InputMask<Opts>['value']>;
    unmaskedValue: IMask.InputMask<Opts>['unmaskedValue'];
    setUnmaskedValue: Dispatch<IMask.InputMask<Opts>['unmaskedValue']>;
    typedValue: IMask.InputMask<Opts>['typedValue'];
    setTypedValue: Dispatch<IMask.InputMask<Opts>['typedValue']>;
};
