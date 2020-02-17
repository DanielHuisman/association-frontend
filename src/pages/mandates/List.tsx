import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {useTranslation} from 'react-i18next';
import {Loader, Table} from 'semantic-ui-react';
import moment from 'moment';

import MandateType from '../../components/mandate/MandateType';
import MandateTable from '../../components/mandates/MandateTable';
import TableSelectableRow from '../../components/table/TableSelectableRow';
import YesNo from '../../components/util/YesNo';
import GetMandates from '../../queries/GetMandates.graphql';
import {GetMandates as GetMandatesType} from '../../types/generatedTypes';

const MandatesList = () => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetMandatesType>(GetMandates);

    if (error) {
        throw error;
    }

    return (
        <>
            {loading && <Loader active />}

            {data && <MandateTable mandates={data.mandates} />}
        </>
    );
};

export default MandatesList;
