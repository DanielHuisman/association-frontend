import React from 'react';
import {FieldProps} from 'formik';
import {Form, Input, Message} from 'semantic-ui-react';

interface IProps extends FieldProps {
    type: string;
    label?: string;
    placeholder?: string;
}

const FieldInput = ({field, form: {touched, errors, isSubmitting, setFieldValue}, type, label, placeholder, ...props}: IProps) => {
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

export default FieldInput;
