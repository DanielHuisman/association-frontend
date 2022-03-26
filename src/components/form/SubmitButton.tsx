import React from 'react';
import {connect} from 'formik';
import {Button, ButtonProps} from 'semantic-ui-react';

export const SubmitButton = connect<ButtonProps>(({formik: {isSubmitting, isValid}, children, ...props}) => (
    <Button type="submit" disabled={isSubmitting || !isValid} {...props}>
        {children}
    </Button>
));
