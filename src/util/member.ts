import {MandateStatus, MemberFragment, MandateFragment} from '../types/generatedTypes';

export type MemberWithMandates = MemberFragment & {
    mandates: MandateFragment[];
};

export const hasPendingMandate = (member: MemberWithMandates) =>
    member.mandates.filter((mandate) => mandate.__typename === 'PaperMandate' && mandate.status === MandateStatus.UNACCEPTED).length > 0;

export const hasAcceptedMandate = (member: MemberWithMandates) =>
    member.mandates.filter((mandate) => mandate.status === MandateStatus.ACCEPTED).length === 0;
