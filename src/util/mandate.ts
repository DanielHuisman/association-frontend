import {MandateFragment, MandateStatus} from '../generated/graphql';

export const getPendingPaperMandates = (mandates: MandateFragment[]) =>
    mandates.filter((mandate) =>
        mandate.__typename === 'PaperMandate' && (mandate.status === MandateStatus.CREATED || mandate.status === MandateStatus.UNACCEPTED)
    );

export const getAcceptedMandates = (mandates: MandateFragment[]) => mandates.filter((mandate) => mandate.status === MandateStatus.ACCEPTED);

export const hasPendingPaperMandates = (mandates: MandateFragment[]) => getPendingPaperMandates(mandates).length > 0;
export const hasAcceptedMandates = (mandates: MandateFragment[]) => getAcceptedMandates(mandates).length > 0;
