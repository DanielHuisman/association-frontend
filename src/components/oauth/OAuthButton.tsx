import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import {Button, ButtonProps, Icon, IconProps, Loader} from 'semantic-ui-react';

import {OAuthAuthorizeMutation, OAuthAuthorizeMutationVariables, ProviderType} from '../../generated/graphql';
import OAuthAuthorize from '../../mutations/OAuthAuthorize.graphql';

import styles from './OAuthButton.css';

interface IProps extends ButtonProps {
    type: ProviderType;
    name: string;
    icon: IconProps['name'];
}

const OAuthButton = ({type, name, icon, ...props}: IProps) => {
    const [authorize, {loading, error}] = useMutation<OAuthAuthorizeMutation, OAuthAuthorizeMutationVariables>(OAuthAuthorize, {
        variables: {
            type,
            redirectUri: `${window.location.origin}/oauth/${type.toLocaleLowerCase()}`
        },
        onCompleted(data) {
            window.location.href = data.oauthAuthorize;
        }
    });

    if (error) {
        throw error;
    }

    const handleClick = () => {
        localStorage.removeItem('oauthUserId');
        authorize();
    };

    return (
        <Button onClick={handleClick} disabled={loading} {...props}>
            <Icon name={icon} />
            Sign in with {name}

            <Loader className={styles.loader} size="tiny" active={loading} inline inverted />
        </Button>
    );
};

export default OAuthButton;
