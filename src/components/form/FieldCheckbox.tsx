import React from 'react';
import {FieldProps} from 'formik';
import {Checkbox, Form, Message} from 'semantic-ui-react';

export interface FieldCheckboxProps extends FieldProps<boolean> {
    label?: string;
    extraLabel?: string;
}

export const FieldCheckbox: React.FC<FieldCheckboxProps> = ({
    field, form: {touched, errors, isSubmitting, setFieldValue}, label, extraLabel, ...props
}) => (
    <Form.Field error={touched[field.name] && !!errors[field.name]}>
        {extraLabel && <label>{extraLabel}</label>}

        <Checkbox
            label={label}
            checked={field.value}
            onChange={(event) => {
                event.persist();
                console.log(event);
                setFieldValue(field.name, !field.value);
            }}
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
