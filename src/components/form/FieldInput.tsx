import React from 'react';
import {FieldProps} from 'formik';
import {Form, Input, Message} from 'semantic-ui-react';

export interface FieldInputProps extends FieldProps {
    type: string;
    label?: string;
    placeholder?: string;
}

export const FieldInput: React.FC<FieldInputProps> = ({field, form: {touched, errors, isSubmitting}, type, label, placeholder, ...props}) => (
    <Form.Field error={touched[field.name] && !!errors[field.name]}>
        {label && <label>{label}</label>}

        <Input
            {...field}
            type={type}
            placeholder={placeholder || label}
            disabled={isSubmitting}
            {...props}
        />

        {touched[field.name] && !!errors[field.name] && (
            <Message
                content={errors[field.name]}
                error
                visible
            />
        )}
    </Form.Field>
);
