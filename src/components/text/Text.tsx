import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Placeholder} from 'semantic-ui-react';

import Markdown from '../../components/text/Markdown';
import {GetPageQuery, GetPageQueryVariables} from '../../generated/graphql';
import GetPage from '../../queries/GetPage.graphql';
import {useTranslate} from '../../util';

interface IProps {
    name: string;
}

const Text = ({name}: IProps) => {
    const translate = useTranslate();
    const {loading, data, error} = useQuery<GetPageQuery, GetPageQueryVariables>(GetPage, {
        variables: {
            id: name
        }
    });

    if (error) {
        throw error;
    }

    return (
        <>
            {loading && (
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

export default Text;
