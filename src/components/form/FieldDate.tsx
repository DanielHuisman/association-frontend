import React from 'react';
import {FieldProps} from 'formik';
import {Form, Message} from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import {Moment} from 'moment';
import moment from 'moment';

interface IProps extends FieldProps<Moment | null> {
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
            value={field.value ? field.value.toDate() : null}
            onChange={(_event, data) => {
                setFieldValue(field.name, data.value ? moment(data.value as Date) : null);
            }}
            placeholder={placeholder || label}
            disabled={isSubmitting}
            allowOnlyNumbers={false}
            showOutsideDays
            showToday
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
