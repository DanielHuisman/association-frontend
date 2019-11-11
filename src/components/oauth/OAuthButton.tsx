import React from 'react';
import {Mutation} from 'react-apollo';
import {Button, ButtonProps, Icon, IconProps, Loader} from 'semantic-ui-react';

import OAuthAuthorize from '../../mutations/OAuthAuthorize.graphql';
import {OAuthAuthorize as OAuthAuthorizeType, ProviderType} from '../../types/generatedTypes';

import styles from './OAuthButton.css';

interface IProps extends ButtonProps {
    type: ProviderType;
    name: string;
    icon: IconProps['name'];
}

const OAuthButton = ({type, name, icon, ...props}: IProps) => {
    const handleCompleted = (data: OAuthAuthorizeType) => {
        window.location.href = data.oauthAuthorize;
    };

    return (
        <Mutation<OAuthAuthorizeType>
            mutation={OAuthAuthorize}
            variables={{type, redirectUri: `${window.location.origin}/oauth/${type.toLocaleLowerCase()}`}}
            onCompleted={handleCompleted}
        >
            {(authorize, {loading, error}) => {
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
            }}
        </Mutation>
    );
};

export default OAuthButton;
