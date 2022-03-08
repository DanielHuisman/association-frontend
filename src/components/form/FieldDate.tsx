import React from 'react';
import {FieldProps} from 'formik';
import {Form, Message} from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';

interface IProps extends FieldProps {
    type: string;
    label?: string;
    placeholder?: string;
}

export type FieldDateProps = IProps;

const FieldDate = ({field, form: {touched, errors, isSubmitting, setFieldValue}, type, label, placeholder, ...props}: IProps) => (
    <Form.Field error={touched[field.name] && !!errors[field.name]}>
        {label && <label>{label}</label>}

        <SemanticDatepicker
            {...field}
            placeholder={placeholder || label}
            disabled={isSubmitting}
            showOutsideDays
            showToday
            onChange={(_event, data) => setFieldValue(field.name, data.value)}
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

export default FieldDate;
