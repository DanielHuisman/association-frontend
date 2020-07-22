import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {useQuery} from '@apollo/react-hooks';
import {Container, Loader, Header} from 'semantic-ui-react';

import DirectDebitTable from '../../components/direct-debits/DirectDebitTable';
import {GetDirectDebitsQuery, GetDirectDebitsQueryVariables} from '../../generated/graphql';
import GetDirectDebits from '../../queries/GetDirectDebits.graphql';

const DirectDebits = () => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetDirectDebitsQuery, GetDirectDebitsQueryVariables>(GetDirectDebits);

    if (error) {
        throw error;
    }

    return (
        <Container>
            <Helmet title={t('directDebits:directDebits.header', 'Direct debits')} />
            <Header size="huge">{t('directDebits:directDebits.header', 'Direct debits')}</Header>

            {loading && <Loader active />}

            {data && <DirectDebitTable directDebits={data.directDebits.values} />}
        </Container>
    );
};

export default DirectDebits;
