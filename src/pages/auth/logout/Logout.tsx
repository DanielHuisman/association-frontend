import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {useNavigate} from 'react-router-dom';
import {Container, Loader} from 'semantic-ui-react';

import {client} from '../../../graphql';

export const Logout: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                // Reset authentication token
                localStorage.setItem('token', '');

                // Reset Apollo store
                await client.resetStore();
            } catch (err) {
                // Ignore error
            }

            // Redirect to index
            navigate('/');
        })();
    }, [navigate]);

    return (
        <Container>
            <Helmet title="Sign out" />

            <Loader active />
        </Container>
    );
};
