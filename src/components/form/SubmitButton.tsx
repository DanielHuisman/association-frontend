import React from 'react';
import {connect} from 'formik';
import {Button, ButtonProps} from 'semantic-ui-react';

const SubmitButton = connect<ButtonProps>(({formik: {isSubmitting}, children, ...props}) => (
    <Button type="submit" disabled={isSubmitting} {...props}>
        {children}
    </Button>
));

export default SubmitButton;
