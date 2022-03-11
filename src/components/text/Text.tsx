import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Placeholder} from 'semantic-ui-react';

import {Markdown} from '../../components/text/Markdown';
import {GetPageQuery, GetPageQueryVariables} from '../../generated/graphql';
import GetPage from '../../queries/GetPage.graphql';
import {useTranslate} from '../../util';

export interface TextProps {
    name: string;
}

export const Text: React.FC<TextProps> = ({name}) => {
    const translate = useTranslate();
    const {loading, data, error} = useQuery<GetPageQuery, GetPageQueryVariables>(GetPage, {
        variables: {
            id: name
        }
    });

    return (
        <>
            {(loading || error) && (
                <Placeholder>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
            )}
            {!loading && data && (
                <>
                    {data.page ? <Markdown source={translate(data.page.body)} /> : name}
                </>
            )}
        </>
    );
};
