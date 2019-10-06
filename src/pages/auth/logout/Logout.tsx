import {History} from 'history';
import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Loader} from 'semantic-ui-react';

import {client} from '../../../graphql';

const signOut = async (history: History) => {
    try {
        // Reset authentication token
        localStorage.setItem('token', '');

        // Reset Apollo store
        await client.resetStore();
    } catch (err) {
        // Ignore error
    }

    // Redirect to index
    history.push('/');
};

interface IProps {
    history: History;
}

const SignOut = ({history}: IProps) => {
    useEffect(() => {
        signOut(history);
    }, []);

    return (
        <Container>
            <Helmet title="Sign out" />

            <Loader active />
        </Container>
    );
};

export default SignOut;
