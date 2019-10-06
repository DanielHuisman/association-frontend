import React, {useEffect} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {Loader} from 'semantic-ui-react';

import {client} from '../../../graphql';
import OAuthAuthenticate from '../../../mutations/OAuthAuthenticate.graphql';
import {OAuthAuthenticate as OAuthAuthenticateType, ProviderType} from '../../../types/generatedTypes';
import {useSimpleQueryParams} from '../../../util';

interface IMatchParams {
    providerType: string;
}

const OAuth = ({match, history}: RouteComponentProps<IMatchParams>) => {
    const [params] = useSimpleQueryParams();

    useEffect(() => {
        (async () => {
            // Find OAuth provider type
            const provider = Object.values(ProviderType).find((type) => type.toLowerCase() === match.params.providerType.toLowerCase());
            if (!provider) {
                throw Error('Unknown OAuth provider type');
            }

            // Authenticate with OAuth authorization code
            try {
                const result = await client.mutate<OAuthAuthenticateType>({
                    mutation: OAuthAuthenticate,
                    variables: {
                        type: provider,
                        redirectUri: `/oauth/${provider.toLowerCase()}`,
                        code: params.code || '',
                        userId: localStorage.getItem('oauthUserId')
                    }
                });

                if (!result) {
                    throw new Error('Empty response');
                }

                // Store authentication token
                localStorage.setItem('token', result.data.oauthAuthenticate.accessToken);

                // Reset Apollo store
                await client.resetStore();

                // Redirect to index
                history.push('/');
            } catch (err) {
                throw err;

                // TODO: React doesn't catch these errors in the error boundary
            }
        })();
    }, []);

    return (
        <Loader active />
    );
};

export default OAuth;
