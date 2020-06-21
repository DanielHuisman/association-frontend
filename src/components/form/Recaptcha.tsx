import React from 'react';
import GoogleRecaptcha from 'react-google-recaptcha';
import {Field, FieldProps} from 'formik';
import {Form} from 'semantic-ui-react';

import config from '../../config';

const Recaptcha = ({name, inputProps = {}, fieldProps = {}}: {name: string, inputProps?: {[k: string]: any}, fieldProps?: {[k: string]: any}}) => {

    const render = ({field, form}: FieldProps<any>) => {
        const error = form.touched[field.name] && form.errors[field.name];
        const handleChange = (value: string) => form.setFieldValue(field.name, value || '');

        return (
            <Form.Field error={!!error} {...fieldProps}>
                <GoogleRecaptcha sitekey={config.recaptcha.siteKey} onChange={handleChange} {...inputProps} />

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

export default Recaptcha;
