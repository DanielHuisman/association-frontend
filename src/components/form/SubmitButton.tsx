import React from 'react';
import {connect} from 'formik';
import {Button, ButtonProps} from 'semantic-ui-react';

const SubmitButton = connect<ButtonProps>(({formik: {isSubmitting, isValid}, children, ...props}) => (
    <Button type="submit" disabled={isSubmitting || !isValid} {...props}>
        {children}
    </Button>
));

export default SubmitButton;
