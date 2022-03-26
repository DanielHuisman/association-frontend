import React from 'react';
import {ReCAPTCHA, ReCAPTCHAProps} from 'react-google-recaptcha';
import {Field, FieldProps} from 'formik';
import {Form, FormFieldProps} from 'semantic-ui-react';

import {config} from '../../config';

export interface RecaptchaProps {
    name: string;
    inputProps?: ReCAPTCHAProps;
    fieldProps?: FormFieldProps;
}

export const Recaptcha: React.FC<RecaptchaProps> = ({name, inputProps = {}, fieldProps = {}}) => {

    const render = ({field, form}: FieldProps) => {
        const error = form.touched[field.name] && form.errors[field.name];
        const handleChange = (value: string) => form.setFieldValue(field.name, value || '');

        return (
            <Form.Field error={!!error} {...fieldProps}>
                <ReCAPTCHA sitekey={config.recaptcha.siteKey} onChange={handleChange} {...inputProps} />

                {error && <span className="error">{form.errors[field.name]}</span>}
            </Form.Field>
        );
    };

    return (
        <Field
            name={name}
            render={render}
        />
    );
};
