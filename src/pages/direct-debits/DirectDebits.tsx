import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Container, Loader, Header} from 'semantic-ui-react';

import DirectDebitTable from '../../components/direct-debits/DirectDebitTable';
import GetDirectDebits from '../../queries/GetDirectDebits.graphql';
import {GetDirectDebits as GetDirectDebitsType} from '../../types/generatedTypes';

const DirectDebits = () => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetDirectDebitsType>(GetDirectDebits);

    if (error) {
        throw error;
    }

    return (
        <Container>
            <Helmet title={t('directDebits:directDebits.header', 'Direct debits')} />
            <Header size="huge">{t('directDebits:directDebits.header', 'Direct debits')}</Header>

            {loading && <Loader active />}

            {data && <DirectDebitTable directDebits={data.directDebits} />}
        </Container>
    );
};

export default DirectDebits;
