import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {gql, useQuery} from '@apollo/react-hooks';
import {Container, Header, Loader} from 'semantic-ui-react';

import {Text} from '../../components/text/Text';
import {Markdown} from '../../components/text/Markdown';
import {GetCommitteesQuery, GetCommitteesQueryVariables} from '../../generated/graphql';
import GetCommittees from '../../queries/GetCommittees.graphql';
import {useTranslate} from '../../util';

export const Committees: React.FC = () => {
    const {t} = useTranslation();
    const translate = useTranslate();

    const {loading, data, error} = useQuery<GetCommitteesQuery, GetCommitteesQueryVariables>(gql(GetCommittees));

    if (loading) {
        return <Loader active />;
    }

    if (error) {
        throw error;
    }

    return (
        <Container>
            <Helmet title={t('general:association.committees.header', 'Committees')} />
            <Header size="huge">{t('general:association.committees.header', 'Committees')}</Header>

            <Text name="committees" />

            {data.committees.values
                .map((committee) => (
                    <Fragment key={committee.id}>
                        <Header size="large">{translate(committee.name)}</Header>
                        <p>
                            <Markdown source={translate(committee.description)} />
                        </p>
                    </Fragment>
                ))
            }
        </Container>
    );
};
