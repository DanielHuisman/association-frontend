import React from 'react';

import {MandateStatus} from '../../types/generatedTypes';
import {useSimpleQueryParams} from '../../util';

const Digital = () => {
    const [params] = useSimpleQueryParams();

    const status =  MandateStatus[params.status] || MandateStatus.ERROR;

    return (
        <>
            Digital
            <p>{status}</p>
        </>
    );
};

export default Digital;
