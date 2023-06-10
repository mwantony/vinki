import React from 'react';
import IMask from 'imask';
import { IMaskInputProps, ReactElementProps } from './mixin';
declare const IMaskInput: React.ForwardRefExoticComponent<(Omit<ReactElementProps<HTMLInputElement> & {
    mask: DateConstructor;
} & Partial<Pick<IMask.Masked<DateConstructor>, "parent" | "prepare" | "validate" | "commit" | "overwrite" | "eager" | "skipInvalid">> & Partial<Pick<IMask.MaskedPattern<DateConstructor>, "blocks" | "definitions" | "placeholderChar" | "displayChar" | "lazy">> & Partial<Pick<IMask.MaskedDate, "parse" | "format" | "pattern" | "min" | "max" | "autofix">> & import("./mixin").ReactMaskProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement> & {
    ref?: React.Ref<React.ComponentType<IMaskInputProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement, ReactElementProps<HTMLInputElement>>>>;
}, "ref"> | Omit<ReactElementProps<HTMLInputElement> & {
    mask: NumberConstructor;
} & Partial<Pick<IMask.Masked<NumberConstructor>, "parent" | "prepare" | "validate" | "commit" | "overwrite" | "eager" | "skipInvalid">> & Partial<Pick<IMask.MaskedNumber, "min" | "max" | "radix" | "thousandsSeparator" | "mapToRadix" | "scale" | "signed" | "normalizeZeros" | "padFractionalZeros">> & import("./mixin").ReactMaskProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement> & {
    ref?: React.Ref<React.ComponentType<IMaskInputProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement, ReactElementProps<HTMLInputElement>>>>;
}, "ref"> | Omit<ReactElementProps<HTMLInputElement> & {
    mask: string;
} & Partial<Pick<IMask.Masked<string>, "parent" | "prepare" | "validate" | "commit" | "overwrite" | "eager" | "skipInvalid">> & Partial<Pick<IMask.MaskedPattern<string>, "blocks" | "definitions" | "placeholderChar" | "displayChar" | "lazy">> & import("./mixin").ReactMaskProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement> & {
    ref?: React.Ref<React.ComponentType<IMaskInputProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement, ReactElementProps<HTMLInputElement>>>>;
}, "ref"> | Omit<ReactElementProps<HTMLInputElement> & {
    mask: IMask.AnyMaskedOptionsArray;
} & Partial<Pick<IMask.Masked<IMask.AnyMaskedOptionsArray>, "parent" | "prepare" | "validate" | "commit" | "overwrite" | "eager" | "skipInvalid">> & Partial<Pick<IMask.MaskedDynamic, "dispatch">> & import("./mixin").ReactMaskProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement> & {
    ref?: React.Ref<React.ComponentType<IMaskInputProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement, ReactElementProps<HTMLInputElement>>>>;
}, "ref"> | Omit<ReactElementProps<HTMLInputElement> & {
    mask: RegExp;
} & Partial<Pick<IMask.Masked<RegExp>, "parent" | "prepare" | "validate" | "commit" | "overwrite" | "eager" | "skipInvalid">> & import("./mixin").ReactMaskProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement> & {
    ref?: React.Ref<React.ComponentType<IMaskInputProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement, ReactElementProps<HTMLInputElement>>>>;
}, "ref"> | Omit<ReactElementProps<HTMLInputElement> & {
    mask: Function;
} & Partial<Pick<IMask.Masked<Function>, "parent" | "prepare" | "validate" | "commit" | "overwrite" | "eager" | "skipInvalid">> & import("./mixin").ReactMaskProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement> & {
    ref?: React.Ref<React.ComponentType<IMaskInputProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement, ReactElementProps<HTMLInputElement>>>>;
}, "ref"> | Omit<ReactElementProps<HTMLInputElement> & Record<string, any> & import("./mixin").ReactMaskProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement> & {
    ref?: React.Ref<React.ComponentType<IMaskInputProps<IMask.AnyMaskedOptions, boolean | "typed", unknown, HTMLInputElement, ReactElementProps<HTMLInputElement>>>>;
}, "ref">) & React.RefAttributes<unknown>>;
export default IMaskInput;
