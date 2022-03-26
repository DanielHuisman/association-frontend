import React from 'react';
import {FieldProps} from 'formik';
import {Form, Input, Message} from 'semantic-ui-react';

interface FieldFileProps extends FieldProps {
    label?: string;
    placeholder?: string;
}

export const FieldFile: React.FC<FieldFileProps> = ({field, form: {touched, errors, isSubmitting, setFieldValue}, label, placeholder, ...props}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setFieldValue(field.name, event.currentTarget.files[0]);

    return (
        <Form.Field error={touched[field.name] && !!errors[field.name]}>
            {label && <label>{label}</label>}

            <Input
                {...field}
                type="file"
                placeholder={placeholder || label}
                disabled={isSubmitting}
                value={undefined}
                onChange={handleChange}
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
};
