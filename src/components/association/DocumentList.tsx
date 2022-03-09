import React from 'react';
import {useTranslation} from 'react-i18next';
import {List, ListProps} from 'semantic-ui-react';

import {DOCUMENTS} from '../../constants';

export const DocumentList: React.FC<ListProps> = (props) => {
    const {t, i18n} = useTranslation();
    const language = i18n.language.substring(0, 2);

    return (
        <List size="large" {...props}>
            <List.Item>
                <a href={DOCUMENTS.articlesOfAssociation[language]} target="articlesOfAssociation">
                    {t('general:association.documents.articlesofAssociation', 'Articles of association')}
                </a>
            </List.Item>
            <List.Item>
                <a href={DOCUMENTS.houseRegulations[language]} target="houseRegulations">
                    {t('general:association.documents.houseRegulations', 'House regulations')}
                </a>
            </List.Item>
            <List.Item>
                <a href={DOCUMENTS.membershipFeeRegulations[language]} target="membershipFeeRegulations">
                    {t('general:association.documents.membershipFeeRegulations', 'Membership fee regulations')}
                </a>
            </List.Item>
            <List.Item>
                <a href={DOCUMENTS.privacyPolicy[language]} target="privacyPolicy">
                    {t('general:association.documents.privacyPolicy', 'Privacy policy')}
                </a>
            </List.Item>
        </List>
    );
};
