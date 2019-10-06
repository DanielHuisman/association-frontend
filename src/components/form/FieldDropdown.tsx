import React from 'react';
import {FieldProps} from 'formik';
import {Form, Dropdown, Message} from 'semantic-ui-react';

interface IProps extends FieldProps {
    label?: string;
    placeholder?: string;
}

const FieldDropdown = ({field, form: {touched, errors, isSubmitting, setFieldValue}, label, placeholder, ...props}: IProps) => {
    const handleBlur = () => undefined;
    const handleChange = (event: React.ChangeEvent<any>, {value}) => setFieldValue(field.name, value, true);

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

export default FieldDropdown;
