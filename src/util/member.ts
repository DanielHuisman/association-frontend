import {MemberFragment, MandateFragment, MandateStatus} from '../generated/graphql';

export type MemberWithMandates = MemberFragment & {
    mandates: MandateFragment[];
};

export const getPendingPaperMandates = (member: MemberWithMandates) =>
    member.mandates.filter((mandate) =>
        mandate.__typename === 'PaperMandate' && (mandate.status === MandateStatus.CREATED || mandate.status === MandateStatus.UNACCEPTED)
    );

export const getAcceptedMandates = (member: MemberWithMandates) => member.mandates.filter((mandate) => mandate.status === MandateStatus.ACCEPTED);

export const hasPendingPaperMandates = (member: MemberWithMandates) => getPendingPaperMandates(member).length > 0;
export const hasAcceptedMandates = (member: MemberWithMandates) => getAcceptedMandates(member).length > 0;
