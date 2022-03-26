import React from 'react';
import {FieldProps} from 'formik';
import {Form, Dropdown, Message} from 'semantic-ui-react';

export interface FieldDropdownProps extends FieldProps {
    label?: string;
    placeholder?: string;
}

export const FieldDropdown: React.FC<FieldDropdownProps> = ({field, form: {touched, errors, isSubmitting, setFieldValue}, label, placeholder, ...props}) => {
    const handleBlur = () => undefined;
    const handleChange = (event: React.ChangeEvent<HTMLElement>, {value}) => setFieldValue(field.name, value, true);

    return (
        <Form.Field error={touched[field.name] && !!errors[field.name]}>
            {label && <label>{label}</label>}

            <Dropdown
                {...field}
                placeholder={placeholder || label}
                disabled={isSubmitting}
                selectOnBlur={false}
                selectOnNavigation={false}
                selection
                onBlur={handleBlur}
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
