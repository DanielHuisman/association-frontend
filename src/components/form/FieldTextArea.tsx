import React from 'react';
import {FieldProps} from 'formik';
import {Form, TextArea, Message} from 'semantic-ui-react';

export interface FieldTextAreaProps extends FieldProps {
    label?: string;
    placeholder?: string;
}

export const FieldTextArea = ({field, form: {touched, errors, isSubmitting}, label, placeholder, ...props}) => (
    <Form.Field error={touched[field.name] && !!errors[field.name]}>
        {label && <label>{label}</label>}

        <TextArea
            {...field}
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
