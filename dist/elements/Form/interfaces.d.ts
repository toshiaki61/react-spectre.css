import { ReactNode, ReactNodeArray } from 'react';
import { IconType } from 'elements/Icon';
export interface FormProps {
    children: ReactNode;
    className?: string;
    horizontal?: boolean;
}
export declare type FormStateType = 'success' | 'error';
export interface FormGroupProps {
    children: ReactNode | ReactNodeArray;
    className?: string;
    color?: FormStateType;
}
export interface FormLabelProps {
    children: ReactNode;
    className?: string;
    htmlFor?: string;
}
export interface FormIconProps {
    iconType?: IconType;
    loading?: boolean;
}
export declare type FormInputType = 'text' | 'radio' | 'checkbox' | 'email' | 'url' | 'search' | 'tel' | 'password' | 'number' | 'date' | 'color' | 'file';
export declare type FormSizeType = 'sm' | 'lg';
export declare type FormFieldStateType = FormStateType;
export interface FormInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    formSize?: FormSizeType;
    state?: FormFieldStateType;
}
export interface FormTextareaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    formSize?: FormSizeType;
}
export interface FormSelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    children: ReactNode;
    formSize?: FormSizeType;
}
export interface FormLabeledProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: ReactNode;
    inline?: boolean;
    formSize?: FormSizeType;
}
export interface FormInputHintProps {
    children: ReactNode;
}
export declare type InputIconPositionType = 'right' | 'left';
export interface HasIconProps {
    children: ReactNode;
    position: InputIconPositionType;
}
export interface InputGroupProps {
    children: ReactNode;
}
export interface InputGroupAddonProps {
    children: ReactNode;
    formSize?: FormSizeType;
}
