import React from 'react';
import {FallbackProps} from 'react-error-boundary';
import {Helmet} from 'react-helmet';
import {Container, Header} from 'semantic-ui-react';

export const ErrorPage: React.FC<FallbackProps> = ({error}) => (
    <Container textAlign="center">
        <Helmet title="Error" />
        <Header size="huge">
            J&SV Exaltio
            <Header.Subheader>An error occured, please try again later.</Header.Subheader>
        </Header>
        <Header.Subheader><code>{error.message}</code></Header.Subheader>
    </Container>
);
